import * as S from "./CartBundleTitle.style";

const RoketInfo = (): JSX.Element => (
  <>
    <span style={{ marginLeft: "10px", fontSize: "12px", fontWeight: "bold" }}>
      무료배송
    </span>
    <span
      style={{ marginLeft: "3px", fontSize: "12px", color: "#555" }}
    >{`(19,800원 이상 구매가능)`}</span>
  </>
);

type BundleType = "normal" | "roket";

interface PropsType {
  type: BundleType;
}

const CartBundleTitle = ({ type }: PropsType) => {
  return (
    <S.Container>
      {type === "normal" && <S.Item>판매자배송 상품</S.Item>}
      {type === "roket" && (
        <>
          <S.Item>로켓배송 상품</S.Item>
          <RoketInfo />
        </>
      )}
    </S.Container>
  );
};

export default CartBundleTitle;
