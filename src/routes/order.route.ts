import { Router } from 'express';
import isAuth from '../utils/isAuth';
import orderController from '../controllers/order.controller';
import orderValidation from '../middlewares/order.validation';

const orderRoute = Router();

orderRoute.get('/orders', orderController.getAllOrders);
orderRoute.post(
  '/orders', 
  isAuth,
  orderValidation.orderCreateBodyValidate,
  orderController.createOrder,
);

export default orderRoute;