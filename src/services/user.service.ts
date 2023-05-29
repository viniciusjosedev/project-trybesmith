import UserModel from '../database/models/user.model';
import { User } from '../types/User';

const login = async (username: string): Promise<User | undefined> => {
  const result = await UserModel.findOne({ where: { username } });

  return result?.dataValues;
};

const getById = async (id: number | string): Promise<User | undefined> => {
  const result = await UserModel.findByPk(id);

  return result?.dataValues;
};

export default { 
  login,
  getById,
};
