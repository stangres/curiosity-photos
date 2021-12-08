import agent from "./agent";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const responseBody = (res: AxiosResponse) => res.data;

export interface IClient {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig
  ) => Promise<T>;
  put: <T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig
  ) => Promise<T>;
  patch: <T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig
  ) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
}

const request = (agent: AxiosInstance) => ({
  get: (url: string, config?: AxiosRequestConfig) =>
    agent.get(url, config).then(responseBody),
  post: (url: string, data: object, config?: AxiosRequestConfig) =>
    agent.post(url, data, config).then(responseBody),
  put: (url: string, data: object, config?: AxiosRequestConfig) =>
    agent.put(url, data, config).then(responseBody),
  patch: (url: string, data: object, config?: AxiosRequestConfig) =>
    agent.patch(url, data, config).then(responseBody),
  delete: (url: string, config?: AxiosRequestConfig) =>
    agent.delete(url, config).then(responseBody),
});

const client: IClient = request(agent);

export default client;
