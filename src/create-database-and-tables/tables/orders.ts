export const orders = `
  CREATE TABLE IF NOT EXISTS orders (
    order_num int NOT NULL AUTO_INCREMENT,
    order_date datetime NOT NULL,
    cust_id int NOT NULL,
    PRIMARY_KEY (order_num)
  ) ENGINE=InnoDB;
`;
