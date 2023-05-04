import Joi from 'joi';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User } from '../types';

const secret = 'TYPESCRIPT';

const userService = {
  async add(data: User): Promise<User> {
    const user = await userModel.add(data);
    return user;
  },
  async validateAdd(unknown: User): Promise<User> {
    const schema = Joi.object({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3), 
      level: Joi.number().required().min(1),       
      password: Joi.string().required().min(8),        
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },
  generateToken(data: User): string {
    const payload = data;
    const token = jwt.sign(payload, secret);
    return token;
  },
};

export default userService;