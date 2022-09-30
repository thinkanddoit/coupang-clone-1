import * as S from "./Title.style";

interface PropsType {
  title: string;
  children?: React.ReactNode;
}

const Title = ({ title, children }: PropsType) => {
  return (
    <S.Container>
      <S.H2>{title}</S.H2>
      <>{children}</>
    </S.Container>
  );
};

export default Title;
