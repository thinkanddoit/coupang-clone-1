import styled from "@emotion/styled";

type ListSizeOptionProps = {
  selected: boolean;
};
export const ListSizeOption = styled.div<ListSizeOptionProps>`
position: relative;
color: #555;
z-index: 4;
font-size: 12px;
height: 32px;
padding: 11px 5px 0;
line-height: 1;
font-size: 12px;
cursor: pointer;
background-color: ${({ selected }) => (selected ? `#fafafa` : `#ffffff`)};
font-weight: ${({ selected }) => (selected ? `bold` : `normal`)};
&:hover {
  background-color: #fafafa;
  display:normal
}
}
`;
