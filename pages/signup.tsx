import { useState } from "react";
import { AuthService } from "@services";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>
        <b>비밀번호</b>
      </label>
      <input
        type="password"
        name="pw"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <b>이름</b>
      </label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        <b>전화번호</b>
      </label>
      <input
        type="text"
        name="phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        name="회원가입"
        onClick={() => AuthService.signup(email, password, name, phoneNumber)}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUpPage;
