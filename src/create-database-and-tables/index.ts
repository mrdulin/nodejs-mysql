import * as mysql from 'mysql';
import { Connection, MysqlError, FieldInfo } from 'mysql';

import { logger } from '../util';
import { config } from '../config';
import * as T from './tables';

const connection: Connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: ''
});

connection.connect(err => {
  if (err) {
    logger.error('error connecting: ' + err.stack);
    return;
  }

  logger.info('connected as id ' + connection.threadId);
});

function createTable(sql: string, name: string) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err: MysqlError | null) => {
      if (err) {
        logger.error(err);
        reject(err);
        return;
      }
      logger.info(`create table ${name} successfully`);
      resolve();
    });
  });
}

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

    Promise.all(Object.keys(T).map((name: string) => createTable(T[name], name)))
      .then(results => {
        connection.end();
      })
      .catch(err => {
        connection.end();
      });
  });
});
