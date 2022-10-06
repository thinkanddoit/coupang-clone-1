import cookies from "js-cookie";

type Type = "access" | "refresh";

class TokenUtil {
  getToken(type: Type) {
    return cookies.get(`${type}Token`);
  }

  setToken(type: Type, token: string, expires: number) {
    cookies.set(`${type}Token`, token, { expires: expires });
  }

  hasToken(type: Type) {
    return !!cookies.get(`${type}Token`);
  }

  clearAllToken() {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
  }
}

export default new TokenUtil();
