import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.getAllOrders();

  const result = orders.map((e, i) => {
    let config;
    if (e.productIds) {
      const data = e.productIds.map((x) => x.id);
      config = {
        productIds: data.sort(),
      };
    }
    config = {
      id: orders[i].id,
      userId: orders[i].userId,
    };
    return config;
  });

  return res.status(200).json(result);
};

export default {
  getAllOrders,
};