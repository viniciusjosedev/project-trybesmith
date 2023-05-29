import { Router } from 'express';
import productValidation from '../middlewares/product.validation';
import productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.post(
  '/products', 
  productValidation.productCreateBodyValidate,
  productController.createProduct,
);

productRoute.get('/products', productController.getAllProducts);

export default productRoute;
