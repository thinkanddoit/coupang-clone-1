import * as S from "./SearchSortingBar.style";

interface PropsType {
  children: React.ReactNode;
}
const SearchSortingBar = (props: PropsType) => {
  return (
    <S.SearchSortingBarContainer>{props.children}</S.SearchSortingBarContainer>
  );
};

export default SearchSortingBar;
