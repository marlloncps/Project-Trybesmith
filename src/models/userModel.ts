import { ResultSetHeader } from 'mysql2';
import { User } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Users';

const userModel = {
  async add(data: User): Promise<User> {
    const sql = `INSERT INTO ${TABLE} (username, classe, level, password) VALUES (?, ?, ?, ?);`;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql, [
      data.username, data.classe, data.level, data.password]);
    return { id: insertId, ...data };
  },
};

export default userModel;