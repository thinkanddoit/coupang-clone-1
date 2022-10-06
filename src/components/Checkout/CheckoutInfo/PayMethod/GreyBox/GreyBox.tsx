import * as S from "./GreyBox.style";

interface PropsType {
  children: React.ReactNode;
}

const GreyBox = ({ children }: PropsType) => {
  return <S.Container>{children}</S.Container>;
};

export default GreyBox;
