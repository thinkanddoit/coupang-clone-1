import * as S from "./AllCheckbox.style";

interface PropsType {
  cartDataSize: number;
  checkedListSize: number;
  onChange: (e: any) => void;
}

const AllCheckbox = ({
  cartDataSize,
  checkedListSize,
  onChange,
}: PropsType) => {
  return (
    <S.Container>
      <input
        type={"checkbox"}
        checked={cartDataSize === checkedListSize}
        onChange={onChange}
      />
      <span>전체선택</span>
      <span style={{ color: "#888888" }}>
        ( <S.Em>{checkedListSize}</S.Em> / {cartDataSize} )
      </span>
      {cartDataSize === checkedListSize ? (
        <S.Button onClick={() => console.log("전체삭제!")}>전체삭제</S.Button>
      ) : (
        <S.Button onClick={() => console.log("선택삭제!")}>선택삭제</S.Button>
      )}
    </S.Container>
  );
};

export default AllCheckbox;
