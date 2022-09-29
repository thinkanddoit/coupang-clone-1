import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils/index";

class CheckoutService extends Service {
  getAccessTokenFromCookie = (cookie: string) => cookie.split(";")[0].slice(12);

  async getOrderSheetInSSR(id: string, cookie: string) {
    const accessToken = this.getAccessTokenFromCookie(cookie);
    if (!accessToken) {
      return;
    }
    const { data } = await HttpUtil.get(`/ordersheet/${id}`, {
      ...super.getAuthHeaders(accessToken),
    });
    return data;
  }
}

export default new CheckoutService();
