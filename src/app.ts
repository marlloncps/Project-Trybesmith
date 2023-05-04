import express from 'express';
import orderRoutes from './routes/orderRoutes';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRoutes);

export default app;
