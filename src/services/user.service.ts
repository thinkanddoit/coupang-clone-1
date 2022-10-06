import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils";

class UserService extends Service {
  async me() {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }

    const { data } = await HttpUtil.get("/users/me", {
      ...super.getAuthHeaders(accessToken),
    });

    return data;
  }

  async read(id: number) {
    const { data } = await HttpUtil.get("/users/" + id);

    return data;
  }
}

export default new UserService();
