import Joi, { ObjectSchema } from 'joi';

const userLoginSchema: ObjectSchema = Joi.object({
  username: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

export default {
  userLoginSchema,
};
