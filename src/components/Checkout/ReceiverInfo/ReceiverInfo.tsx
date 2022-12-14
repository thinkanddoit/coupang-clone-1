import { useEffect, useState } from "react";
import { AddressType } from "@customTypes/checkout";
import {
  Button,
  TableLayout,
  TableRow,
  Title,
} from "@components/Checkout/Common";
import { useOrderDispatch } from "@components/Checkout/OrderContext";
import * as S from "./ReceiverInfo.style";
import Image from "next/image";

interface PropsType {
  initialData: AddressType;
}

const ShipRequestLogo = () => (
  <Image
    src={"https://img1a.coupangcdn.com/image/www/common/icon_arrow.gif"}
    alt={"배송요청사항 로고"}
    width={"7px"}
    height={"14px"}
  />
);

const ReceiverInfo = ({ initialData }: PropsType) => {
  const dispatch = useOrderDispatch();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const listener = (e: any) => {
      setData(e.data);
      dispatch({ type: "CHANGE_ADDRESS", value: data.id });
    };
    new BroadcastChannel("addressBox").addEventListener("message", listener);
  }, []);

  return (
    <S.Container>
      <Title title="받는사람정보">
        <Button
          title="배송지변경"
          margin="0 0 0 10px"
          onClick={() =>
            window.open(
              `./addressbook?addressId=${data.id}`,
              "쿠팡!|배송지 선택",
              "width=510,height=647"
            )
          }
        />
      </Title>
      <TableLayout>
        <TableRow title="이름">
          {data?.receiver}
          {data?.isFreshAvailable && (
            <S.RocketAvailable color="#00891a" margin="0 0 0 3px">
              로켓프레시 가능
            </S.RocketAvailable>
          )}
          {data?.isWowAAvailable && (
            <S.RocketAvailable color="#0074e9" margin="0 0 0 3px">
              로켓와우 가능
            </S.RocketAvailable>
          )}
        </TableRow>
        <TableRow title="배송주소">{`${data?.base} ${data?.detail}`}</TableRow>
        <TableRow title="연락처">{data?.phoneNumber}</TableRow>
        <TableRow title="배송 요청사항" titleLogo={<ShipRequestLogo />}>
          <S.ShipInfoBox>
            <span>문 앞</span>
            <Button title="변경" margin="0 0 0 13px" />
          </S.ShipInfoBox>
        </TableRow>
      </TableLayout>
    </S.Container>
  );
};

export default ReceiverInfo;
