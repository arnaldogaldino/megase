CREATE TABLE `megasena`.`concursos` (
    `Concurso` INT NOT NULL,
    `DataSorteio` DATETIME NULL,
    `Dezena1` INT NOT NULL,
    `Dezena2` INT NOT NULL,
    `Dezena4` INT NOT NULL,
    `Dezena5` INT NOT NULL,
    `Dezena3` INT NOT NULL,
    `Dezena6` INT NOT NULL,
    `ArrecadacaoTotal` DECIMAL(15,2) NULL,
    `GanhadoresSena` INT NOT NULL,
    `Cidade` VARCHAR(60) NULL,
    `UF` VARCHAR(60) NULL,
    `RateioSena` INT NOT NULL,
    `GanhadoresQuina` INT NOT NULL,
    `RateioQuina` DECIMAL(15,2) NULL,
    `GanhadoresQuadra` INT NOT NULL,
    `RateioQuadra` DECIMAL(15,2) NULL,
    `Acumulado` VARCHAR(60) NULL,
    `ValorAcumulado` DECIMAL(15,2) NULL,
    `EstimativaPremio` INT NOT NULL,
    `AcumuladoMegaVirada`DECIMAL(15,2) NULL,
  PRIMARY KEY (`Concurso`),
  UNIQUE INDEX `Concurso_UNIQUE` (`Concurso` ASC));