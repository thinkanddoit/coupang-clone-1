import styled from "@emotion/styled";

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  text-align: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  padding: 0 5px 0 15px;
  flex-direction: column;
`;
export const NameContainer = styled.div`
  padding: 9px 0 14px;
  border-bottom: 1px solid #e2e5e7;
  color: #555;
  font-size: 14px;
  text-align: left;
  font-weight: 700;
`;

export const InfoBottomLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 130px 100px;
  height: 60px;
  padding-top: 4px;
`;

export const CartItemSpan = styled.span`
  color: #888;
  font-size: 12px;
  line-height: 24px;
`;
export const CartItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteButton = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-top: 3px;
  margin-left: 3px;
  background: url(//img1a.coupangcdn.com/image/cart/generalCart/cart_sprite_170201.png) -114px
    0 no-repeat;
  vertical-align: top;
  z-index: 120;
  cursor: pointer;
`;
