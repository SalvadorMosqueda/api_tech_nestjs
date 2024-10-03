import { IBaseResponse } from '../interfaces';

/**
 * The function `baseResponse` returns an object with properties `success`, `data`, `info`, and
 * `message`, with default values and a custom message.
 * @param {IBaseResponse}  - - `success`: A boolean value indicating whether the operation was
 * successful or not. Default value is `true`.
 */
export const baseResponse = ({
  success = true,
  data = {},
  info = {},
  message = 'Operación realizada correctamente',
}: IBaseResponse) => ({ success, data, info, message });
