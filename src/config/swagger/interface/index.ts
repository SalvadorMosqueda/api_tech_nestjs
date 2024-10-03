/* The `export interface ISwaggerOptions` is defining an interface in TypeScript called
`ISwaggerOptions`. This interface has several optional properties that can be used to configure
options for a Swagger API. */
export interface ISwaggerOptions {
  example?: string | number | object | object[] | boolean;
  descriptionOpt?: string;
  type?: string;
  format?: string;
  items?: ISwaggerItems;
}

/* The `export interface ISwaggerResponseOptions` is defining an interface in TypeScript called
`ISwaggerResponseOptions`. This interface has several optional properties that can be used to
configure options for a Swagger API response. These properties include `module`, `link`, `RestApi`,
`descriptionSwagger`, and `apiConsumes`. */
export interface ISwaggerResponseOptions {
  module?: string;
  link?: string;
  RestApi?: string;
  description?: string;
  apiConsumes?: string;
  status?: number;
  descriptionSwagger?: string;
}

export interface ISwagger {
  id: number;
}

export interface ISwaggerItems {
  type: string;
  format?: string;
}
