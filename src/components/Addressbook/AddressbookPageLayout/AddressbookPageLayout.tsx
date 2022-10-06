import * as S from "./AddressbookPageLayout.style";

interface PropsType {
  children: React.ReactNode;
}
const AddressbookPageLayout = ({ children }: PropsType) => {
  return (
    <S.Container>
      <S.Title>배송지 선택</S.Title>
      <S.ContentsBox>
        {children}
        <S.AddAddressButton
          onClick={() => window.alert("준비 중인 기능입니다.")}
        >
          <S.AddIcon />
          <span>배송지 추가</span>
        </S.AddAddressButton>
      </S.ContentsBox>
    </S.Container>
  );
};

export default AddressbookPageLayout;
