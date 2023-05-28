import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await orderService.getAllOrders();

    const result = orders.map((e, i) => {
      let config;
      if (e.productIds) {
        const data = e.productIds.map((x) => x.id);
        config = {
          id: orders[i].id,
          userId: orders[i].userId,
          productIds: data.sort(),
        };
      }
      return config;
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'ERROR INTERNAL' });
  }
};

export default {
  getAllOrders,
};