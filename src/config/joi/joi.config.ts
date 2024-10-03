import Joi from 'joi';

export const joiValidate = Joi.object({
  PORT: Joi.required(),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.required(),
  DB_USER: Joi.required(),
  DB_PASSWORD: Joi.required(),
  DB: Joi.required(),
  STAGE: Joi.required(),
});
