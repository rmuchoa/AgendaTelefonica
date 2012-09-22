CREATE  TABLE IF NOT EXISTS `contact` (
  `id_contact` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(100) NULL ,
  `phone` VARCHAR(50) NULL ,
  PRIMARY KEY(`id_contact`)
) ENGINE = InnoDB;