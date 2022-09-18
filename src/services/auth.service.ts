import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils/index";

class AuthService extends Service {
  private setAllToken(data: any) {
    TokenUtil.setToken("access", data.access, 1);
    TokenUtil.setToken("refresh", data.refresh, 7);
  }

  async refresh() {
    const refreshToken = TokenUtil.getToken("refresh");

    if (!refreshToken) {
      return;
    }

    const { data } = await HttpUtil.post("/auth/refresh", null, {
      ...super.getAuthHeaders(refreshToken),
    });

    this.setAllToken(data);
  }

  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string
  ) {
    const { data } = await HttpUtil.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
    });

    this.setAllToken(data);
  }

  async login(email: string, password: string) {
    const { data } = await HttpUtil.post("/auth/login", { email, password });

    this.setAllToken(data);
  }
}

export default new AuthService();
