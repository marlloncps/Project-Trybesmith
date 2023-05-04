import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const orders = await orderServices.getAll();
    return res.status(200).json(orders);
  },
};

export default orderController;