import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px 35px 16px 0;
  background: #f7f7f7;
  font-size: 12px;
  line-height: 29px;
  text-align: right;
  border-bottom: 1px solid #ddd;
`;

type PropType = {
  isBold?: boolean;
};
export const Number = styled.span<PropType>`
  font-size: 15px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "")};
`;

export const Plus = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 8px;
  vertical-align: -5px;

  background: url(//img1a.coupangcdn.com/image/order/mathematics-symbol.png)
    no-repeat;
  background-position: 0 0;
`;

export const Equal = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;

  margin: 0 8px;
  background: url(//img1a.coupangcdn.com/image/order/mathematics-symbol.png)
    no-repeat;
  vertical-align: -5px;
  background-position: -36px 0;
`;
