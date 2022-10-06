import * as S from "./Button.style";

interface PropsType {
  title: string;
  onClick?: () => void;
  margin?: string;
}

const Button = ({ title, onClick, margin }: PropsType) => {
  return (
    <S.Button onClick={onClick} margin={margin}>
      {title}
    </S.Button>
  );
};

export default Button;
