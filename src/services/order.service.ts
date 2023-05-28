import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import sequelize from '../database/models';

const createOrder = async (data: Order): Promise<Order> => 
  sequelize.transaction(async (t) => {
    const result = await OrderModel.create(data, { transaction: t });

    return result.dataValues;
  });

const getAllOrders = async (): Promise<Order[]> => {
  const result = await OrderModel.findAll({ include: { 
    model: ProductModel, 
    as: 'productIds',
    attributes: ['id'],
  } });

  return result.map((e) => e.dataValues);
};

getAllOrders();

export default {
  createOrder,
  getAllOrders,
};
