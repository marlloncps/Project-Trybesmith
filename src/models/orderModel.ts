import { Order } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Orders';

const orderModel = {
  async getAll(): Promise<Order[]> {
    const sql = `
    SELECT
    O.id, O.userId, JSON_ARRAYAGG(P.id) as productsIds
    FROM
    Trybesmith.Products as P
    INNER JOIN ${TABLE} as O
    ON
    P.orderId = O.id
    GROUP BY
    O.id
    ORDER BY
    O.userId
    `;
    const [order] = await connection.query(sql);
    return order as Order[];
  },
};

export default orderModel;