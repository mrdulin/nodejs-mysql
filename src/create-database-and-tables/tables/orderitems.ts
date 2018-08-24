export const orderitems = `
  CREATE TABLE IF NOT EXISTS orderitems (
    order_num int NOT NULL,
    order_item int NOT NULL,
    prod_id char(10) NOT NULL,
    quantity int NOT NULL DEFAULT 1,
    item_price decimal(8, 2) NOT NULL,
    PRIMARY KEY (order_num, order_item)
  ) ENGINE=InnoDB;
`;
