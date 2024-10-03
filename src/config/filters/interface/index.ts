export enum RestApiRequest {
  get = 'Get',
  post = 'Post',
  patch = 'Patch',
  delete = 'Delete',
}

export enum EMessageResponse {
  conflict = 'Conflict',
  unauthorized = 'Unauthorized',
  internalServerError = 'Internal server error',
  unprocessableEntity = 'Unprocessable entity',
}
