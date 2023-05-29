import express from 'express';
import productRoute from './routes/product.route';
import orderRoute from './routes/order.route';
import userRoute from './routes/user.route';

const app = express();

app.use(express.json());

app.use(productRoute);
app.use(orderRoute);
app.use(userRoute);

export default app;
