import * as S from "./OverPageAlert.style";

const OverPageAlert = () => {
  return (
    <S.OverPageAlertContainer>
      <S.OverPageAlertText>해당상품이 없습니다.</S.OverPageAlertText>
      <S.OverPageAlertText>
        더 좋은 상품으로 찾아오겠습니다.
      </S.OverPageAlertText>
    </S.OverPageAlertContainer>
  );
};

export default OverPageAlert;
