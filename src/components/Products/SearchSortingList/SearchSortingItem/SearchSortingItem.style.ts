import styled from "@emotion/styled";

export const SearchSortingItemContainer = styled.div`
  float: left;
  height: 100%;
  padding: 0 10px;
  line-height: 1.5;
  color: #555;
  border-left: 1px solid #eee;
`;

type SearchSortingItemTextProps = {
  selected: boolean;
};
export const SearchSortingItemText = styled.div<SearchSortingItemTextProps>`
  font-size: 12px;
  line-height: 1.5;
  cursor: pointer;
  color: ${({ selected }) => (selected ? `#0073e9` : `#555`)};
  font-weight: ${({ selected }) => (selected ? `bold` : `normal`)};
  &:hover {
    color: #0073e9;
  }
`;
