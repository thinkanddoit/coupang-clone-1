import axios, { AxiosRequestConfig } from "axios";

class HttpUtil {
  readonly instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

  get(url: string, config?: AxiosRequestConfig) {
    return this.instance.get(url, config);
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.put(url, data, config);
  }

  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.patch(url, data, config);
  }
}

export default new HttpUtil();
