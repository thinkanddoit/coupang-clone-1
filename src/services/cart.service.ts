import { Service } from "@services";
import { HttpUtil, TokenUtil } from "@utils/index";

class CartService extends Service {
  async getCartItem() {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }

    const { data } = await HttpUtil.get("/cart", {
      ...super.getAuthHeaders(accessToken),
    });
    return data;
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

  async deleteCartItem(id: number) {
    const accessToken = TokenUtil.getToken("access");
    if (!accessToken) {
      return;
    }
    return await HttpUtil.delete(`/cart-items/${id}`, {
      ...super.getAuthHeaders(accessToken),
    });
  }
}

export default new CartService();
