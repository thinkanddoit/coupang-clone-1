import SearchSortingItem from "./SearchSortingItem/SearchSortingItem";
import { fillInitialQuery, shallowRouting } from "utils";
import { RouterAndQueryPropsType } from "@@types/products";
import * as S from "./SearchSortingList.style";

interface CaseType {
  name: string;
  queryString: string;
}
const SortingCases: CaseType[] = [
  { name: "쿠팡 랭킹순", queryString: "bestAsc" },
  { name: "낮은가격순", queryString: "salePriceAsc" },
  { name: "높은가격순", queryString: "salePriceDesc" },
  { name: "판매량순", queryString: "saleCountDesc" },
  { name: "최신순", queryString: "latestAsc" },
];

const SearchSortingList = ({ router, query }: RouterAndQueryPropsType) => {
  const sorter = query?.sorter || "bestAsc";

  return (
    <S.SearchSortingListContainer>
      {SortingCases.map((sorting: CaseType, idx: number) => (
        <SearchSortingItem
          key={idx}
          name={sorting.name}
          selected={sorting.queryString === sorter}
          onClick={() => {
            shallowRouting(
              router,
              fillInitialQuery({
                ...query,
                page: 1,
                sorter: sorting.queryString,
              })
            );
          }}
        />
      ))}
    </S.SearchSortingListContainer>
  );
};

export default SearchSortingList;
