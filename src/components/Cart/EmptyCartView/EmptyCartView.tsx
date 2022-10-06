import { Loading } from "@components/Common";
import { useResetCartItem } from "../hooks";
import { TokenUtil } from "@utils";
import * as S from "./EmptyCartView.style";
import { AuthService } from "@services";

const EmptyCartView = () => {
  const isLogin = !!TokenUtil.getToken("access");
  const { mutate, isLoading } = useResetCartItem();
  return (
    <S.Container>
      {isLoading && <Loading />}
      <S.H2>장바구니에 담은 상품이 없습니다.</S.H2>
      {isLogin ? (
        <>
          <S.H3>
            장바구니 갱신을 하시면, 장바구니에 보관된 5개의 상품을 확인하실 수
            있습니다.
          </S.H3>
          <S.Button onClick={() => mutate()}>장바구니 갱신하기</S.Button>
        </>
      ) : (
        <>
          <>
            <S.H3>
              로그인을 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.
            </S.H3>
            <S.Button
              onClick={() =>
                AuthService.login("test@naver.com", "1234").then(() => mutate())
              }
            >
              로그인하기
            </S.Button>
          </>
        </>
      )}
    </S.Container>
  );
};

export default EmptyCartView;
