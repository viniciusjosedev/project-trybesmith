import { Router } from 'express';
import orderController from '../controllers/order.controller';

const orderRoute = Router();

orderRoute.get('/orders', orderController.getAllOrders);

export default orderRoute;