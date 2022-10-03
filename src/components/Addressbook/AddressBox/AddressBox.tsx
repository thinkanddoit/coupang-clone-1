import { AddressType } from "@customTypes/checkout";
import * as S from "./AddressBox.style";
import { BroadcastChannel } from "broadcast-channel";

interface PropsType {
  data: AddressType;
  selected: boolean;
}

const AddressBox = ({ data, selected }: PropsType) => {
  // const channel = new BroadcastChannel("addressBox");

  return (
    <S.Container selected={selected}>
      <S.Receiver>{data.receiver}</S.Receiver>
      {data.isFreshAvailable && (
        <S.RocketAvailable color="#00891a" margin="0 0 4px 0">
          로켓프레시 가능
        </S.RocketAvailable>
      )}
      {data.isWowAAvailable && (
        <S.RocketAvailable color="#0074e9" margin="0 0 4px 0">
          로켓와우 가능
        </S.RocketAvailable>
      )}
      <S.Text>
        {data.base}, {data.detail}
      </S.Text>
      <S.Text>{data.phoneNumber}</S.Text>
      <S.Text>문 앞</S.Text>
      <S.ButtonLayout>
        <S.WhiteButton onClick={() => window.alert("준비 중인 기능입니다.")}>
          수정
        </S.WhiteButton>
        <S.BlueButton
          onClick={() => {
            // channel.postMessage(data);
            window.close();
          }}
        >
          선택
        </S.BlueButton>
      </S.ButtonLayout>
    </S.Container>
  );
};

export default AddressBox;
