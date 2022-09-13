import * as S from "./SearchSortingItem.style";

interface SearchSortingItemProps {
  name: string;
  onClick: any;
  selected: boolean;
}

const SearchSortingItem = ({
  name,
  selected,
  onClick,
}: SearchSortingItemProps) => {
  return (
    <S.SearchSortingItemContainer>
      <S.SearchSortingItemText selected={selected} onClick={onClick}>
        {name}
      </S.SearchSortingItemText>
    </S.SearchSortingItemContainer>
  );
};

export default SearchSortingItem;
