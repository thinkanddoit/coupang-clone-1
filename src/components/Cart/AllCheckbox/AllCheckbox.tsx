import { Loading } from "@components/Common";
import { useDeleteItems } from "../hooks";
import * as S from "./AllCheckbox.style";

interface PropsType {
  allChecked: boolean;
  cartDataSize: number;
  checkedList: number[];
  onChange: (e: any) => void;
}

const AllCheckbox = ({
  allChecked,
  cartDataSize,
  checkedList,
  onChange,
}: PropsType) => {
  const { isLoading, mutate } = useDeleteItems();
  const deleteItems = (ids: number[]) => {
    if (window.confirm("선택한 상품을 삭제하시겠습니까?")) {
      mutate(ids);
    }
  };
  return (
    <S.Container>
      {isLoading && <Loading />}
      <input type={"checkbox"} checked={allChecked} onChange={onChange} />
      <span>전체선택</span>
      <span style={{ color: "#888888" }}>
        ( <S.Em>{checkedList.length}</S.Em> / {cartDataSize} )
      </span>
      {allChecked ? (
        <S.Button onClick={() => deleteItems(checkedList)}>전체삭제</S.Button>
      ) : (
        <S.Button onClick={() => deleteItems(checkedList)}>선택삭제</S.Button>
      )}
    </S.Container>
  );
};

export default AllCheckbox;
