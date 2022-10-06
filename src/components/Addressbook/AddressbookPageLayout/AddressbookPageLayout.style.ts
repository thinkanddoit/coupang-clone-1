import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 81px;
`;

export const Title = styled.div`
  padding: 9px 0;
  color: #111;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  border: 1px solid #ccc;
`;

export const ContentsBox = styled.div`
  min-width: 300px;
  max-width: 460px;
  padding: 10px 10px 30px;
  margin: auto;
`;

export const AddAddressButton = styled.button`
  box-sizing: content-box;
  background-color: #fff;
  color: #0073e9;
  border: 1px solid #ccc;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 15%);
  transition: box-shadow 0.25s ease;
  display: block;
  text-align: center;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-left: -1px;
  margin-right: -1px;
  font-size: 16px;
  height: 48px;
  line-height: 47px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

export const AddIcon = styled.i`
  background-image: url(https://static.coupangcdn.com/image/static/identity/sprite-identity.20180801.svg),
    none;
  background-size: 110px 110px;
  display: inline-block;
  overflow: hidden;
  width: 1px;
  vertical-align: middle;
  white-space: nowrap;
  text-indent: 1px;
  height: 16px;
  padding-left: 15px;
  background-position: -1px -22px;
  margin-top: -5px;
`;
