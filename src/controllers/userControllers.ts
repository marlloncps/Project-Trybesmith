import { Request, Response } from 'express';
import userService from '../services/userServices';

const userController = {
  async add(req: Request, res: Response) {
    const data = userService.validateAdd(req.body);
    const user = await userService.add(await data);
    const token = userService.generateToken(user);
    res.status(201).json({ token });
  },
};

export default userController;