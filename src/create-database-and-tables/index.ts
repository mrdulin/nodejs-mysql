import * as mysql from 'mysql';
import { Connection, MysqlError, FieldInfo } from 'mysql';

import { logger } from '../util';
import { config } from '../config';

const connection: Connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

connection.connect(err => {
  if (err) {
    logger.error('error connecting: ' + err.stack);
    return;
  }

  logger.info('connected as id ' + connection.threadId);
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database}`, (createDBErr: MysqlError | null) => {
  if (createDBErr) {
    logger.error(createDBErr);
    return;
  }

  connection.query(`USE ${config.database}`, (useDBErr: MysqlError | null) => {
    if (useDBErr) {
      logger.error(useDBErr);
      return;
    }
  });
});

connection.end();
