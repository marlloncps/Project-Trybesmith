import orderModel from '../models/orderModel';

const orderServices = {
  async getAll() {
    const order = await orderModel.getAll();
    return order;
  },
};

export default orderServices;