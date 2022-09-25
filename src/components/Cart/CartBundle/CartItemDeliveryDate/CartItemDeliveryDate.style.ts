import styled from "@emotion/styled";

type propsType = {
  isEarlyDelivery: boolean;
};

export const EarlyDeliveryInfo = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 5px;
`;

export const DeliveryDate = styled.span<propsType>`
  font-size: 13px;
  color: ${({ isEarlyDelivery }) => (isEarlyDelivery ? "#00891a" : "#111")};
`;
