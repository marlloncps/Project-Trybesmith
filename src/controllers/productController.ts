import { Request, Response } from 'express';
import productService from '../services/productServices';

const productController = {
  async getAll(_req: Request, res: Response) {
    const products = await productService.getAll();
    res.status(200).json(products);
  },
  async add(req: Request, res: Response) {
    const data = await productService.validateBody(req.body);
    const id = await productService.add(data);
    const product = await productService.getProduct(id);
    res.status(201).json(product);
  },
};

export default productController;