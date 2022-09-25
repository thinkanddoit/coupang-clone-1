import * as S from "./CartBundleLayout.style";

interface PropsType {
  children: React.ReactNode;
}
const CartItemLayout = ({ children }: PropsType) => {
  return <S.Container>{children}</S.Container>;
};

export default CartItemLayout;
