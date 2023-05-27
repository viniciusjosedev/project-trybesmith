import { Response, Request } from 'express';
import productService from '../services/product.service';
import { Product } from '../types/Product';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, price, orderId } = req.body;

    const body: Product = {
      name,
      price,
      orderId,
    };

    const { id } = await productService.createProduct(body);

    return res.status(201).json({ id, name, price });
  } catch (error) {
    return res.status(500).json({ message: 'ERROR INTERNAL' });
  }
};

export default {
  createProduct,
};
