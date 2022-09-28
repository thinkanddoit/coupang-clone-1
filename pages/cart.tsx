import { useEffect, useMemo } from "react";
import {
  CartPageLayout,
  PurchaseTypeSelector,
  CartContentsHeader,
  EmptyCartView,
  CartItemsLayout,
  AllCheckbox,
  CartTotalPrice,
} from "@components/Cart";
import { CartDataType } from "@customTypes/cart";
import { useCheck } from "@components/Cart/hooks";
import {
  getCheckedData,
  getNormalData,
  getRoketData,
} from "@components/Cart/utils/cartDataUtil";
import { useQuery } from "react-query";
import { CART_ITEM } from "@constants/queryKeys";
import { CartService } from "@services";
import { Loading } from "@components/Common";

const CartPage = () => {
  const { isLoading, data } = useQuery([CART_ITEM], CartService.getCartItem);
  const cartData: CartDataType[] = data;

  //test용
  console.log(cartData);

  const { checkedList, setCheckedList, onChangeEach, onChangeAll, allChecked } =
    useCheck(cartData);
  const isCartEmpty: boolean = useMemo(() => !cartData?.length, [cartData]);

  useEffect(() => {
    if (cartData)
      setCheckedList([
        ...checkedList.filter((id) => cartData.map((e) => e.id).includes(id)),
      ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartData]);

  if (isLoading) return <Loading />;
  else
    return (
      <CartPageLayout>
        <PurchaseTypeSelector
          selected="normal"
          normalCount={cartData?.length}
        />
        <CartContentsHeader
          isEmpty={isCartEmpty}
          allChecked={allChecked}
          onChange={onChangeAll}
        />
        {isCartEmpty ? (
          <EmptyCartView />
        ) : (
          <>
            <CartItemsLayout
              type="roket"
              cartData={getRoketData(cartData)}
              checkedList={checkedList}
              onChangeEach={onChangeEach}
            />
            <CartItemsLayout
              type="normal"
              cartData={getNormalData(cartData)}
              checkedList={checkedList}
              onChangeEach={onChangeEach}
            />
            <AllCheckbox
              allChecked={allChecked}
              cartDataSize={cartData.length}
              checkedList={checkedList}
              onChange={onChangeAll}
            />
            <CartTotalPrice
              checkedCartData={getCheckedData(cartData, checkedList)}
            />
          </>
        )}
      </CartPageLayout>
    );
};

export default CartPage;
