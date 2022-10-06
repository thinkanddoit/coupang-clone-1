import styled from "@emotion/styled";

export const Container = styled.div``;

export const CashInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CashInputBox = styled.div`
  margin-top: 10px;
  padding: 10px 0px 10px 115px;
  border-top: 1px solid rgb(238, 238, 238);
  background-color: rgb(248, 248, 248);
`;

export const Input = styled.input`
  width: 220px;
  height: 24px;
  margin-bottom: 10px;
  padding: 0px 0px 0px 5px;
  border: 1px solid rgb(221, 221, 221);
  font-size: 12px;
  color: rgb(51, 51, 51);
`;

export const SmallBar = styled.span`
  margin-left: 10px;
  color: rgb(154, 154, 154);
`;

interface PropsType {
  disabled: boolean;
}
export const Button = styled.button<PropsType>`
  margin-left: 2px;
  padding: 4px 8px;
  border: 1px solid rgb(0, 133, 218);
  color: rgb(0, 133, 218);
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
  font-size: 11px;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;

export const ExcessWarning = styled.div`
  margin: 10px 0px;
  color: rgb(255, 0, 37);
`;
