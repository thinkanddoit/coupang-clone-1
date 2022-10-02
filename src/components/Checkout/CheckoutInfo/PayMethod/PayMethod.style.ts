import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const RatioBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 2px;
  font-size: 12px;
  line-height: 39px;
  margin-right: 9px;
`;

export const Ratio = styled.input`
  margin: 0 2px 0 0;
`;

interface PropsType {
  checked: boolean;
}
export const ArrowLabel = styled.span<PropsType>`
  background-image: ${({ checked }) =>
    checked
      ? "url(//img1a.coupangcdn.com/image/www/newBuy/cardPaySelector_arrowUp.gif)"
      : ""};
  background-repeat: no-repeat;
  background-position: 50% bottom;
`;
