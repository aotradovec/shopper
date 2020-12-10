import { from } from 'env-var';

const env = from(process.env, {});

export const envVariables = {
  PRODUCTS_API_URL: env.get('PRODUCTS_API_URL')
    .asString()
};
