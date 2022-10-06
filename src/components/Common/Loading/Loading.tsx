import { FadeLoader } from "react-spinners";
import { Mordal } from "@components/Common";

const Loading = () => {
  return (
    <Mordal>
      <FadeLoader color="#0175ff" />
    </Mordal>
  );
};

export default Loading;
