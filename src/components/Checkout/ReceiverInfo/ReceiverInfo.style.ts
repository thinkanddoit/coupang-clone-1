import styled from "@emotion/styled";

export const Container = styled.div``;

export const ShipInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

interface PropsType {
  color: string;
  margin?: string;
}
export const RocketAvailable = styled.span<PropsType>`
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: 1px;
  border-radius: 8px;
`;
