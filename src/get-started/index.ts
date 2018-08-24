import * as mysql from 'mysql';
import { Connection, MysqlError, FieldInfo } from 'mysql';

import { logger } from '../util';

const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

connection.connect(err => {
  if (err) {
    logger.error('error connecting: ' + err.stack);
    return;
  }

  logger.info('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => {
  if (err) {
    logger.error(err);
    return;
  }

  logger.info(`The solution is: , ${results[0].solution}`);
});

connection.end();
