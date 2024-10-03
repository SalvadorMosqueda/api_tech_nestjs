export interface IApiConsumes {
  json: string;
  multipart: string;
}

export interface IBaseResponse {
  success?: boolean;
  data?: object | object[];
  info?: object;
  message?: string;
}
