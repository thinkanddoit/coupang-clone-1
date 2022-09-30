import { Button } from "@components/Checkout/Common";
import * as S from "./PhoneNumberContents.style";

interface PropsType {
  number: string;
}
const getHyphenPhoneNumber = (number: string) =>
  number.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

const PhoneNumberContents = ({ number }: PropsType) => {
  return (
    <S.Container>
      <div>
        <S.Input value={getHyphenPhoneNumber(number)} disabled />
        <Button title="수정" onClick={() => {}} />
        <S.GreySpan>쿠폰/티켓정보는 구매한 분의 번호로 전송됩니다.</S.GreySpan>
      </div>
      <S.Alert>
        * 인증 번호를 못 받았다면, 1577-7011 번호 차단 및 스팸 설정을 확인해
        주세요.
      </S.Alert>
    </S.Container>
  );
};

export default PhoneNumberContents;
