import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  padding: 8px 15px 7px 16px;
  background: #fff;
  text-align: left;
  line-height: 15px;
  z-index: 100;
  border: 1px solid #999;
  width: max-content;
  right: 100%;
  margin-right: 10px;
`;
export const Arrow = styled.div`
  position: absolute;
  top: -8px;
  height: 10px;
  width: 100%;
  top: 12px;
  right: -6px;
  background: url(//img1a.coupangcdn.com/image/order/bundle-tooltip-direction-right.png)
    no-repeat 100% 0;
`;

type PropsType = {
  color: string;
};

export const ColorSpan = styled.span<PropsType>`
  color: ${({ color }) => color};
`;
