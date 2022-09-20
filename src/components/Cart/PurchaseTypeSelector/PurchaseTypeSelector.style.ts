import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 900px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
`;

type ItemProps = {
  selected: boolean;
};
export const Item = styled.div<ItemProps>`
  width: 50%;
  border-top: ${({ selected }) =>
    selected ? "2px solid #0073e9" : "1px solid #e2dfdf"};
  border-right: ${({ selected }) => (selected ? "2px solid #0073e9" : "0")};
  border-bottom: ${({ selected }) => (selected ? "0" : "2px solid #0073e9")};
  border-left: ${({ selected }) => (selected ? "2px solid #0073e9" : "0")};
  padding-top: 17px;
  padding-bottom: 16px;
  background: ${({ selected }) => (selected ? "#fff" : "#f5f5f5")};
  font-weight: 700;
  color: ${({ selected }) => (selected ? "#0073e9" : "#111")};
`;
