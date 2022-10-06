import * as S from "./TableRow.style";

interface PropsType {
  title: string;
  titleLogo?: any;
  children: React.ReactNode;
}

const TableRow = ({ title, titleLogo, children }: PropsType) => {
  return (
    <S.TR>
      <S.TitleTD>
        {titleLogo}
        {title}
      </S.TitleTD>
      <S.ContentsTD>{children}</S.ContentsTD>
    </S.TR>
  );
};

export default TableRow;
