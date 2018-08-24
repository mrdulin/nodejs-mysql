export const vendors = `
  CREATE TABLE IF NOT EXISTS vendors (
    vendor_id int NOT NULL AUTO_INCREMENT,
    vendor_name char(50) NOT NULL,
    vendor_address char(50) NULL,
    vendor_city char(50) NULL,
    vendor_state char(5) NULL,
    vendor_zip char(10) NULL,
    vendor_country char(50) NULL,
    PRIMARY KEY (vendor_id)
  ) ENGINE=InnoDB;
`;
