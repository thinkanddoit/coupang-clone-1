import ListSizeOptionItem from "./ListSizeOptionItem/ListSizeOptionItem";
import { fillInitialQuery, shallowRouting } from "utils";
import { RouterAndQueryPropsType } from "@@types/products";
import * as S from "./ListSizeOptionBox.style";

interface CaseType {
  name: string;
  size: number;
}
const ListSizeCases: CaseType[] = [
  { name: "12개씩 보기", size: 12 },
  { name: "24개씩 보기", size: 24 },
];

const ListSizeOptionBox = ({ router, query }: RouterAndQueryPropsType) => {
  const listSize = Number(query?.listSize) || 12;
  return (
    <S.ListOptionBoxContainer>
      {ListSizeCases.map((lsCase: CaseType, idx: number) => (
        <ListSizeOptionItem
          key={idx}
          name={lsCase.name}
          selected={lsCase.size === listSize}
          onClick={() => {
            shallowRouting(
              router,
              fillInitialQuery({ ...query, listSize: lsCase.size })
            );
          }}
        />
      ))}
    </S.ListOptionBoxContainer>
  );
};

export default ListSizeOptionBox;
