import Joi from 'joi';
import productModel from '../models/productModel';
import { Product } from '../types';

const productService = {
  async getAll() {
    const data = await productModel.getAll();
    return data;
  },
  async add(data: Product) {
    const product = await productModel.add(data);
    return product;
  },
  async validateBody(unkown: Product): Promise<Product> {
    const schema = Joi.object({
      name: Joi.string().min(3).min(3).required(),
      amount: Joi.string().min(3).required(),               
    });
    const result = await schema.validateAsync(unkown);
    return result;
  },
  async getProduct(id: number) {
    const data = await productModel.getById(id);
    return data;
  },
};

export default productService;