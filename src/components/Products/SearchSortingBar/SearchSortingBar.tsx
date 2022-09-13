import { RouterAndQueryPropsType } from "@customTypes/products";
import { ListSizeOptionBox, SearchSortingList } from "@components/Products";
import * as S from "./SearchSortingBar.style";

const SearchSortingBar = (props: RouterAndQueryPropsType) => {
  return (
    <S.SearchSortingBarContainer>
      <SearchSortingList {...props} />
      <ListSizeOptionBox {...props} />
    </S.SearchSortingBarContainer>
  );
};

export default SearchSortingBar;
