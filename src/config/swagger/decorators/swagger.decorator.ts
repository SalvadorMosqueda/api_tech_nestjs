import { applyDecorators, Delete, Get, Patch, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiConsumes,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import {
  apiConsumes as constantsApiConsumes,
  authMessage,
  GenericResponse,
  successMessage,
} from '../../../common';
import { EMessageResponse } from '../../filters/interface';
import { ISwaggerResponseOptions } from '../interface';

/* The `export const Swagger` is a function that takes in an object with properties `description`,
`module`, `status`, `RestApi`, `link`, and `apiConsumes`. It then returns a decorator function that
can be used to decorate a method in a NestJS controller. */
export const Swagger = ({
  description,
  module,
  status,
  RestApi,
  link = '',
  apiConsumes = constantsApiConsumes.json,
}: ISwaggerResponseOptions) => {
  const restOptions = {
    Get,
    Post,
    Patch,
    Delete,
  };

  /* The `return applyDecorators()` statement is used to apply multiple decorators to a method in a
NestJS controller. */
  return applyDecorators(
    ApiResponse({
      status: status || 200,
      description: description || successMessage(module).found,
      type: GenericResponse,
    }),
    ApiForbiddenResponse({
      description: authMessage.notPermission,
      type: GenericResponse,
    }),
    ApiConflictResponse({
      description: EMessageResponse.conflict,
      type: GenericResponse,
    }),
    ApiUnauthorizedResponse({
      type: GenericResponse,
      description: EMessageResponse.unauthorized,
    }),
    ApiUnprocessableEntityResponse({
      type: GenericResponse,
      description: EMessageResponse.unprocessableEntity,
    }),
    ApiInternalServerErrorResponse({
      type: GenericResponse,
      description: EMessageResponse.internalServerError,
    }),
    ApiConsumes(apiConsumes),
    restOptions[RestApi](link),
  );
};
