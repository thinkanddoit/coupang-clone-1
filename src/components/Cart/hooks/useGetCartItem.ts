import { useQuery } from "@hooks";
import { CartService } from "@services";
import { CART_ITEM } from "@constants/queryKeys";

const useGetCartItem = () => {
  return useQuery({
    queryKey: [CART_ITEM],
    queryFn: CartService.getCartItem,
  });
};

export default useGetCartItem;
