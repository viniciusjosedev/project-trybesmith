import OrderModel from 'src/database/models/order.model';
import { Order } from 'src/types/Order';
import sequelize from '../database/models';

const createOrder = async (data: Order): Promise<Order> => 
  sequelize.transaction(async (t) => {
    const result = await OrderModel.create(data, { transaction: t });

    return result.dataValues;
  });

export default {
  createOrder,
};
