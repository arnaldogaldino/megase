/*
CREATE TABLE `megasena`.`possibilidades` (
  `Possibilidade` INT NOT NULL AUTO_INCREMENT,
  `Dezena1`  INT NOT NULL,
  `Dezena2`  INT NOT NULL,
  `Dezena3`  INT NOT NULL,
  `Dezena4`  INT NOT NULL,
  `Dezena5`  INT NOT NULL,
  `Dezena6`  INT NOT NULL,
  PRIMARY KEY (`possibilidade`),
  UNIQUE INDEX `possibilidade_UNIQUE` (`possibilidade` ASC));
*/
/*--SET @row_number = 0; (@row_number:=@row_number + 1) AS num, */
insert into possibilidades (Dezena1,Dezena2,Dezena3,Dezena4,Dezena5,Dezena6)
select d1.Dezena as Dezena1,
        d2.Dezena as Dezena2,
        d3.Dezena as Dezena3,
        d4.Dezena as Dezena4,
        d5.Dezena as Dezena5,
        d6.Dezena as Dezena6
  from dezenas as d1,
       dezenas as d2,
       dezenas as d3,
       dezenas as d4,
       dezenas as d5,
       dezenas as d6;