import Jwt, { SignOptions } from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret';

export default function generateToken(payload: object): string {
  const configJwt: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  return Jwt.sign(payload, jwtSecret, configJwt);
}
