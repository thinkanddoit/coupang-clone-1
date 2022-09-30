import * as S from "./Button.style";

interface PropsType {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: PropsType) => {
  return <S.Button onClick={onClick}>{title}</S.Button>;
};

export default Button;
