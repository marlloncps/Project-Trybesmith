import { Router } from 'express';
import orderController from '../controllers/orderControllers';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;