import * as S from "./TableLayout.style";

interface PropsType {
  children: React.ReactNode;
}

const TableLayout = ({ children }: PropsType) => {
  return (
    <S.Table>
      <S.TBody>{children}</S.TBody>
    </S.Table>
  );
};

export default TableLayout;
