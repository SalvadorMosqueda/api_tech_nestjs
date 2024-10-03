import {} from '@nestjs/common';
import { IApiConsumes } from '../interfaces';

/* The code `export const apiConsumes: IApiConsumes = { json: 'application/json', multipart:
'multipart/form-data' };` is defining a constant variable `apiConsumes` that represents the
different types of data that an API can consume. */
export const apiConsumes: IApiConsumes = {
  json: 'application/json',
  multipart: 'multipart/form-data',
};
