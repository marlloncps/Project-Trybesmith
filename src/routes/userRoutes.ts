import { Router } from 'express';
import userController from '../controllers/userControllers';

const userRouter = Router();
userRouter.post('/', userController.add);

export default userRouter;