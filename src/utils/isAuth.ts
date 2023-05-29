import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    if (typeof authorization === 'string') {
      jwt.verify(authorization, jwtSecret);
      return next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
