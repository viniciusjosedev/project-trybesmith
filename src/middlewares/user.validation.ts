import { NextFunction, Request, Response } from 'express';
import validations from './validations/validations';

const userLoginValidate = async (req: Request, res: Response, next: NextFunction)
: Promise<Response | void> => {
  const { password, username } = req.body;

  const { type, message } = validations.userLoginValidate({ username, password });

  if (type) {
    return res.status(400).json({ message });
  }

  return next();
};

export default {
  userLoginValidate,
};
