import styled from "@emotion/styled";

type propType = {
  selected: boolean;
};
export const Container = styled.div<propType>`
  z-index: 1;
  padding: ${({ selected }) => (selected ? "16px" : "15px")};
  border: ${({ selected }) =>
    selected ? "2px solid #0073e9" : "1px solid #ccc"};
`;

export const Receiver = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 9px;
`;

interface PropsType {
  color: string;
  margin?: string;
}
export const RocketAvailable = styled.span<PropsType>`
  display: inline-block;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: 1px;
  border-radius: 8px;
  font-size: 12px;
`;

export const Text = styled.div`
  font-size: 15px;
  line-height: 19px;
  white-space: normal;
  margin-top: 4px;
`;

export const ButtonLayout = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const WhiteButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-border-radius: 2px;
  vertical-align: middle;
  box-sizing: content-box;
  background-color: #fff;
  color: #0073e9;
  border: 1px solid #ccc;
  box-shadow: none;
  transition: box-shadow 0.25s ease;
  min-width: 68px;
  font-size: 14px;
  height: 34px;
  line-height: 33px;
  cursor: pointer;
`;

export const BlueButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  -webkit-border-radius: 2px;
  vertical-align: middle;
  box-sizing: content-box;
  background-color: #0073e9;
  color: #fff;
  border: 0;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  transition: box-shadow 0.25s ease;
  min-width: 70px;
  font-weight: bold;
  margin-left: 10px;
  font-size: 14px;
  height: 34px;
  line-height: 33px;
  cursor: pointer;
`;
