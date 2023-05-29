import schema from './schema';

type DataLogin = {
  username: string,
  password: string
};

type ReturnLogin = {
  type: string | undefined,
  message?: string,
};

type DataCreateProduct = {
  name: string,
  price: string,
};

const MESSAGE = '"username" and "password" are required';

const userLoginValidate = (data: DataLogin): ReturnLogin => {
  const { error } = schema.userLoginSchema.validate(data);

  if (error) {
    return { type: 'ERROR', message: MESSAGE };
  }

  return {
    type: undefined,
  };
};

const productCreateBodyValidate = (data: DataCreateProduct): ReturnLogin => {
  const { error } = schema.productCreateBodySchema.validate(data);

  if (error) {
    return { type: 'ERROR', message: error.message };
  }

  return { type: undefined };
};

export default {
  userLoginValidate,
  productCreateBodyValidate,
};
