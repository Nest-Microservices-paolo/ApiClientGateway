import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCT_MS_HOST: string;
  PRODUCT_MS_PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCT_MS_PORT: joi.number().required(),
    PRODUCT_MS_HOST: joi.string().required(),
  })
  .unknown();

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error('Error config file ' + error.message);
}

const envEnvars: EnvVars = value;

export const envs = {
  port: envEnvars.PORT,
  productMsHost: envEnvars.PRODUCT_MS_HOST,
  productMsPort: envEnvars.PRODUCT_MS_PORT,
};
