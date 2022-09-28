import { CartService } from "@services";
import { CART_ITEM } from "@constants/queryKeys";
import { useMutation, useQueryClient } from "react-query";

const useDeleteItems = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (ids: number[]) =>
      Promise.all(ids.map((id) => CartService.deleteCartItem(id))),
    {
      onError: () => {
        window.alert(
          "네트워크 에러입니다.\n인터넷 연결을 확인하고 다시 시도해주세요."
        );
        queryClient.invalidateQueries(CART_ITEM);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(CART_ITEM);
      },
    }
  );
  return { mutate, isLoading };
};

export default useDeleteItems;
