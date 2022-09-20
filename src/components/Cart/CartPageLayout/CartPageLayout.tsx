import * as S from "./CartPageLayout.style";

interface PropsType {
  children: React.ReactNode;
}
const CartPageLayout = ({ children }: PropsType) => {
  return <S.Container>{children}</S.Container>;
};

export default CartPageLayout;
