import * as S from "./CartContentsLayout.style";

interface PropsType {
  children: React.ReactNode;
}
const CartContentsLayout = ({ children }: PropsType) => {
  return <S.Container>{children}</S.Container>;
};

export default CartContentsLayout;
