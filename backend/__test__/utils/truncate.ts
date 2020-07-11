import connection from '../../src/database';

export default async (table: string) => {
  await connection(table).truncate();
};