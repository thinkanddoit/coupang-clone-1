import { BuyerType } from "@customTypes/checkout";
import { TableLayout, TableRow, Title } from "@components/Checkout/Common";
import PhoneNumberContents from "./PhoneNumberContents/PhoneNumberContents";
import * as S from "./BuyerInfo.style";

interface PropsType {
  data: BuyerType;
}

const BuyerInfo = ({ data }: PropsType) => {
  return (
    <S.Container>
      <Title title="구매자정보" />
      <TableLayout>
        <TableRow title="이름">{data.name}</TableRow>
        <TableRow title="이메일">{data.email}</TableRow>
        <TableRow title="휴대폰 번호">
          <PhoneNumberContents number={data.phoneNumber} />
        </TableRow>
      </TableLayout>
    </S.Container>
  );
};

export default BuyerInfo;
