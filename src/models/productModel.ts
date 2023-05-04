import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const productModel = {
  async getAll() {
    const sql = `
    SELECT * FROM ${TABLE}
    `;
    const [product] = await connection.query<RowDataPacket[]>(sql);
    return product;
  },
  async add(data: Product) {
    const sql = `INSERT INTO ${TABLE} (name, amount) VALUES(?, ?);`;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql, [data.name, data.amount]);
    return insertId;
  },
  async getById(id: Product['id']): Promise<Array<unknown>> {
    const sql = `SELECT id, name, amount FROM ${TABLE} WHERE id = ?`;
    const [[product]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return product as Product[];
  },
};

export default productModel;