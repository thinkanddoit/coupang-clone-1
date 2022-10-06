import { OrderRequestBodyType } from "@customTypes/checkout";
import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils";

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

  async getAddressListInSSR(cookie: string) {
    const accessToken = this.getAccessTokenFromCookie(cookie);
    if (!accessToken) {
      return;
    }
    const { data } = await HttpUtil.get("/address", {
      ...super.getAuthHeaders(accessToken),
    });
    return data;
  }

  async completeOrder(body: OrderRequestBodyType) {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }
    return await HttpUtil.post(
      "/order/complete",
      { ...body },
      {
        ...super.getAuthHeaders(accessToken),
      }
    )
      .then((res) => window.alert(`주문이 완료되었습니다. 감사합니다!`))
      .catch((error) => window.alert(`네트워크 에러입니다.\n${error}`));
  }
}

export default new CheckoutService();
