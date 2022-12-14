import styled from "@emotion/styled";

interface PropsType {
  margin?: string;
  onClick?: () => void;
}
export const Button = styled.button<PropsType>`
  height: fit-content;
  padding: 4px 8px;
  border: 1px solid #999;
  background-color: #fff;
  color: #333;
  border-radius: 2px;
  box-shadow: 0 -2px 0 rgb(0 0 0 / 10%) inset;
  font-size: 11px;
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "")};
  margin: ${({ margin }) => margin};
`;
