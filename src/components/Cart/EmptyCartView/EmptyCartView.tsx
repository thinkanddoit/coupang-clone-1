import * as S from "./EmptyCartView.style";

const EmptyCartView = () => {
  return (
    <S.Container>
      <S.H2>장바구니에 담은 상품이 없습니다.</S.H2>
      <S.H3>
        장바구니 갱신을 하시면, 장바구니에 보관된 5개의 상품을 확인하실 수
        있습니다.
      </S.H3>
      <S.Button onClick={() => console.log("reset 하기")}>
        장바구니 갱신하기
      </S.Button>
    </S.Container>
  );
};

export default EmptyCartView;
