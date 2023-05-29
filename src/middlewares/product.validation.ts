import { NextFunction, Request, Response } from 'express';
import validations from './validations/validations';

const productCreateBodyValidate = async (req: Request, res: Response, next: NextFunction): 
Promise<Response | void> => {
  const { price, name } = req.body;

  const { message } = validations.productCreateBodyValidate({ price, name });

  if (message?.includes('required')) {
    return res.status(400).json({ message });
  }

  if (message?.includes('string') || message?.includes('3')) {
    return res.status(422).json({ message });
  }

  return next();
};

export default {
  productCreateBodyValidate,
};
