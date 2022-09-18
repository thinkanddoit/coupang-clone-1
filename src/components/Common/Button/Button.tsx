import * as S from "./Button.style";

interface PropsType {
  name: string;
  onClick: any;
}

const Button = ({ name, onClick }: PropsType) => {
  return <S.Button onClick={onClick}>{name}</S.Button>;
};

export default Button;
