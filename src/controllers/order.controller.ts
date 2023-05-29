import { Request, Response } from 'express';
import productService from '../services/product.service';
import userService from '../services/user.service';
import orderService from '../services/order.service';

const createOrder = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;

  const verific = await userService.getById(userId);

  if (!verific) {
    return res.status(404).json({ message: '"userId" not found' });
  }

  const { id } = await orderService.createOrder(userId);

  console.log(id);

  await Promise.all(productIds.map((e: number) => productService.updateProduct(e, Number(id))));

  return res.status(201).json({ userId, productIds });
};

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
  createOrder,
};