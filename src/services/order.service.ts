import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import sequelize from '../database/models';

const createOrder = async (userId: number): Promise<Order> => 
  sequelize.transaction(async (t) => {
    const result = await OrderModel.create({
      userId,
    }, { transaction: t });

    return result.dataValues;
  });

const getAllOrders = async (): Promise<Order[]> => {
  const result = await OrderModel.findAll({ include: { 
    model: ProductModel, 
    as: 'productIds',
  } });

  return result.map((e) => e.dataValues);
};

export default {
  createOrder,
  getAllOrders,
};
