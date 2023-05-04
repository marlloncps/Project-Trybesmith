import { Router } from 'express';
import productController from '../controllers/productController';

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.post('/', productController.add);

export default productRouter;