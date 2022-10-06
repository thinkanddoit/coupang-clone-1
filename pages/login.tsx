import { AuthService, CartService } from "@services";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("test@naver.com");
  const [password, setPassword] = useState("1234");
  const router = useRouter();
  return (
    <div
      style={{
        display: "grid",
        gridGap: "10px",
        width: "300px",
        padding: "20px",
      }}
    >
      <label>
        <b>아이디(이메일)</b>
      </label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>
        <b>비밀번호</b>
      </label>
      <input
        type="password"
        name="pw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        name="로그인"
        onClick={() => {
          AuthService.login(email, password).then(() => {
            CartService.resetCartItem();
            CartService.getCartItem().then(() => router.push("/cart"));
          });
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
