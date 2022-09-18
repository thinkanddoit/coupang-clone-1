import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils/index";

class CartService extends Service {
  async getCartItem() {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }

    return await HttpUtil.get("/cart", {
      ...super.getAuthHeaders(accessToken),
    });
  }

  async resetCartItem() {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }
    return await HttpUtil.post(
      "/cart/reset",
      {},
      {
        ...super.getAuthHeaders(accessToken),
      }
    );
  }
}

export default new CartService();
