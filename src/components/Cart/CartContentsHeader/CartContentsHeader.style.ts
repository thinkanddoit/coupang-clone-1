import styled from "@emotion/styled";

type ContainerProps = {
  isEmpty: boolean;
};
export const Container = styled.div<ContainerProps>`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fafafa;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-left: ${({ isEmpty }) => (isEmpty ? "145px" : "0")};
  font-size: 13px;
  font-weight: bold;
`;

type ItemProps = {
  width?: string;
  marginLeft?: string;
};
export const Item = styled.div<ItemProps>`
  width: ${({ width }) => width};
  margin-left: ${({ marginLeft }) => marginLeft};
  text-align: center;
`;

export const AllCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
