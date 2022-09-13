import { FadeLoader } from "react-spinners";

const Loading = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <FadeLoader color="#0073e9" height={20} />
  </div>
);

export default Loading;
