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

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).json(await productService.getAllProducts());
  } catch (error) {
    return res.status(500).json({ message: 'ERROR INTERNAL' });
  }
};

export default {
  createProduct,
  getAllProducts,
};
