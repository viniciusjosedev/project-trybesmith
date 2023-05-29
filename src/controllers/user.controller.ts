import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken';
import userService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const result = await userService.login(username);

  if (!result) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const validation = bcrypt.compareSync(password, result.password);

  if (validation) {
    const data = {
      id: result.id,
      username: result.username,
    };

    const token = generateToken(data);

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Username or password invalid' });
};

export default {
  login,
};
