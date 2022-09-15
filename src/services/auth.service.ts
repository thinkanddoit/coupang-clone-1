import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils/index";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService extends Service {
  private setAllToken(data: any) {
    TokenUtil.setToken("access", data.access, 1);
    TokenUtil.setToken("refresh", data.refresh, 7);
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = TokenUtil.getToken("refresh");

    if (!refreshToken) {
      return;
    }

    const { data } = await HttpUtil.post("/auth/refresh", null, {
      ...this.getAuthHeaders(refreshToken),
    });

    this.setAllToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await HttpUtil.post("/auth/signup", {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    });

    this.setAllToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await HttpUtil.post("/auth/login", { email, password });

    this.setAllToken(data);
  }
}

export default new AuthService();
