import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px;
`;

type propType = {
  height?: string;
};
export const ShippinFeeContainer = styled.div<propType>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
  width: 90px;
  font-size: 12px;
  color: #888;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;
