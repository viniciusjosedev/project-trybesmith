import { Response, Request } from 'express';
import productService from '../services/product.service';
import { Product } from '../types/Product';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;

  const body: Product = {
    name,
    price,
    orderId,
  };

  const { id } = await productService.createProduct(body);

  return res.status(201).json({ id, name, price });
};

const getAllProducts = async (req: Request, res: Response): Promise<Response> => 
  res.status(200).json(await productService.getAllProducts());

export default {
  createProduct,
  getAllProducts,
};
