import { CartService } from "@services";
import { CART_ITEM } from "@constants/queryKeys";
import { useMutation, useQueryClient } from "react-query";

const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();
  interface MutatePropsType {
    id: number;
    quantity: number;
  }
  const { mutate, isLoading } = useMutation(
    ({ id, quantity }: MutatePropsType) =>
      CartService.updateCartItemQuantity(id, quantity),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CART_ITEM);
      },
      onError: () => {
        window.alert(
          "네트워크 에러입니다.\n인터넷 연결을 확인하고 다시 시도해주세요."
        );
      },
      retry: 2,
    }
  );
  return { mutate, isLoading };
};

export default useUpdateCartItemQuantity;
