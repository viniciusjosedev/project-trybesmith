import { NextFunction, Request, Response } from 'express';
import validations from './validations/validations';

const funcComplement = (message: string | undefined, res: Response, next: NextFunction)
: Response | void => {
  if (message?.includes('required')) {
    return res.status(400).json({ message });
  }

  if (message?.includes('must')) {
    return res.status(422).json({ message });
  }

  return next();
};

const orderCreateBodyValidate = async (req: Request, res: Response, next: NextFunction)
: Promise<Response | void> => {
  const { userId, productIds } = req.body;

  if (userId && typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }

  const { message } = validations.orderCreateBodyValidate({ userId, productIds });

  if (message?.includes('does not contain 1 required value')) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  if (message?.includes('found')) {
    return res.status(404).json({ message });
  }

  return funcComplement(message, res, next);
};

export default {
  orderCreateBodyValidate,
};
