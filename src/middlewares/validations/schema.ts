import Joi, { ObjectSchema } from 'joi';

const userLoginSchema: ObjectSchema = Joi.object({
  username: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

const productCreateBodySchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
});

const orderCreateBodySchema: ObjectSchema = Joi.object({
  productIds: Joi.array().items(Joi.number().required()).required(),
  userId: Joi.number().min(1).required(),
});

export default {
  userLoginSchema,
  productCreateBodySchema,
  orderCreateBodySchema,
};
