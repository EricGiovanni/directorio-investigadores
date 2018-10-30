CREATE TABLE `Institucion` (
	`id_institucion` INT NOT NULL AUTO_INCREMENT,
	`nombre_institucion` varchar(100) NOT NULL,
	`es_publica` BOOLEAN,
	`es_independiente` BOOLEAN,
	PRIMARY KEY (`id_institucion`)
);

CREATE TABLE `Telefono_Institucion` (
	`id_telefono_institucion` INT NOT NULL AUTO_INCREMENT,
	`id_institucion` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id_telefono_institucion`)
);

CREATE TABLE `Campus` (
	`id_campus` INT NOT NULL AUTO_INCREMENT,
	`nombre_campus` varchar NOT NULL,
	`estado` varchar(60) NOT NULL UNIQUE,
	`municipio` varchar(60) NOT NULL,
	`id_institucion` varchar(60) NOT NULL,
	PRIMARY KEY (`id_campus`)
);

CREATE TABLE `Colegio` (
	`id_colegio` INT NOT NULL AUTO_INCREMENT,
	`nombre_colegio` varchar NOT NULL,
	`ciudad` varchar NOT NULL,
	`calle` varchar NOT NULL,
	`numero_calle` varchar NOT NULL,
	`esFacultad` BOOLEAN,
	`esEscuela` BOOLEAN,
	`id_campus` INT NOT NULL,
	`entidad` varchar NOT NULL,
	`municipio` varchar NOT NULL,
	PRIMARY KEY (`id_colegio`)
);

CREATE TABLE `Telefono_fac` (
	`id_telefono_fac` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`id_colegio` INT NOT NULL UNIQUE,
	`telefono_fac` INT NOT NULL UNIQUE,
	PRIMARY KEY (`id_telefono_fac`)
);

CREATE TABLE `Carrera_facultad` (
	`id_carrera_fac` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_carrera_fac` varchar NOT NULL,
	PRIMARY KEY (`id_carrera_fac`)
);

CREATE TABLE `Posgrado_facultad` (
	`id_posgrado` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_posgrado` varchar NOT NULL,
	PRIMARY KEY (`id_posgrado`)
);

CREATE TABLE `Telefono_escuela` (
	`id_telefono_escuela` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`telefono_escuela` INT NOT NULL UNIQUE,
	PRIMARY KEY (`id_telefono_escuela`)
);

CREATE TABLE `Carrera_escuela` (
	`id_carrera_escuela` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_carrera_escuela` varchar NOT NULL,
	PRIMARY KEY (`id_carrera_escuela`)
);

CREATE TABLE `Dpto_Facultad` (
	`id_dpto_fac` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_dpto_fac` varchar NOT NULL,
	PRIMARY KEY (`id_dpto_fac`)
);

CREATE TABLE `Depto_Escuela` (
	`id_dpto_escuela` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	PRIMARY KEY (`id_dpto_escuela`)
);

CREATE TABLE `Usuario` (
	`CURP` varchar(18) NOT NULL AUTO_INCREMENT,
	`nombre_usuario` varchar NOT NULL,
	`apellido_paterno` varchar NOT NULL,
	`apellido_materno` varchar NOT NULL,
	`telefono_usuario` INT NOT NULL,
	`password` varchar NOT NULL,
	`aprobado` BOOLEAN NOT NULL,
	PRIMARY KEY (`CURP`)
);

CREATE TABLE `Investigador` (
	`id_investigador` INT NOT NULL AUTO_INCREMENT,
	`CURP` varchar(18) NOT NULL,
	`CV` TEXT NOT NULL,
	`id_instituto` INT NOT NULL,
	`id_colegio` INT,
	PRIMARY KEY (`id_investigador`)
);

CREATE TABLE `Instituto` (
	`id_instituto` INT NOT NULL AUTO_INCREMENT,
	`nombre_instituto` varchar NOT NULL,
	`entidad` varchar NOT NULL,
	`municipio` varchar NOT NULL,
	`ciudad` varchar NOT NULL,
	`calle` varchar NOT NULL,
	`numero_calle_instituto` varchar NOT NULL,
	`id_campus` INT NOT NULL,
	`es_instituto` BOOLEAN,
	`es_centro` BOOLEAN,
	PRIMARY KEY (`id_instituto`)
);

CREATE TABLE `Telefono_instituto` (
	`id_telefono_instituto` INT NOT NULL AUTO_INCREMENT,
	`id_instituto` INT NOT NULL,
	`telefono_instituto` INT NOT NULL,
	PRIMARY KEY (`id_telefono_instituto`)
);

CREATE TABLE `Coautor` (
	`id_coautor` INT NOT NULL AUTO_INCREMENT,
	`CURP` varchar(18) NOT NULL,
	PRIMARY KEY (`id_coautor`)
);

CREATE TABLE `Articulo` (
	`id_articulo` INT NOT NULL AUTO_INCREMENT,
	`fecha_publicacion` DATE NOT NULL,
	`descripcion` TEXT,
	`nombre_articulo` varchar NOT NULL,
	PRIMARY KEY (`id_articulo`)
);

CREATE TABLE `Administrador` (
	`id_admin` INT NOT NULL AUTO_INCREMENT,
	`CURP` varchar(18) NOT NULL,
	PRIMARY KEY (`id_admin`)
);

CREATE TABLE `Pertenecer_Grupo` (
	`id_pertenecer_grupo` INT NOT NULL AUTO_INCREMENT,
	`id_grupo` INT NOT NULL,
	`id_investigador` INT NOT NULL,
	`fecha_inicio_pertenecer` DATE NOT NULL,
	`fecha_fin_pertenecer` DATE,
	PRIMARY KEY (`id_pertenecer_grupo`)
);

CREATE TABLE `Grupo` (
	`id_grupo` INT NOT NULL AUTO_INCREMENT,
	`nombre_grupo` varchar NOT NULL UNIQUE,
	`descripcion_grupo` TEXT NOT NULL UNIQUE,
	`fecha_inicio_grupo` DATE NOT NULL,
	`fecha_fin_grupo` DATE,
	PRIMARY KEY (`id_grupo`)
);

CREATE TABLE `Publicar_Articulo` (
	`id_publicar_articulo` INT NOT NULL AUTO_INCREMENT,
	`id_investigador` INT NOT NULL,
	`id_articulo` INT NOT NULL,
	`fecha_publicacion` DATE NOT NULL,
	PRIMARY KEY (`id_publicar_articulo`)
);

CREATE TABLE `Ser_Coautor_Articulo` (
	`id_ser_coautor_aritculo` INT NOT NULL AUTO_INCREMENT,
	`id_articulo` INT NOT NULL,
	`id_coautor` INT NOT NULL,
	`fecha_registro` DATE NOT NULL,
	PRIMARY KEY (`id_ser_coautor_aritculo`)
);

ALTER TABLE `Telefono_Institucion` ADD CONSTRAINT `Telefono_Institucion_fk0` FOREIGN KEY (`id_institucion`) REFERENCES `Institucion`(`id_institucion`);

ALTER TABLE `Campus` ADD CONSTRAINT `Campus_fk0` FOREIGN KEY (`id_institucion`) REFERENCES `Institucion`(`id_institucion`);

ALTER TABLE `Colegio` ADD CONSTRAINT `Colegio_fk0` FOREIGN KEY (`id_campus`) REFERENCES `Campus`(`id_campus`);

ALTER TABLE `Telefono_fac` ADD CONSTRAINT `Telefono_fac_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Carrera_facultad` ADD CONSTRAINT `Carrera_facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Posgrado_facultad` ADD CONSTRAINT `Posgrado_facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Telefono_escuela` ADD CONSTRAINT `Telefono_escuela_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Carrera_escuela` ADD CONSTRAINT `Carrera_escuela_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Dpto_Facultad` ADD CONSTRAINT `Dpto_Facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Depto_Escuela` ADD CONSTRAINT `Depto_Escuela_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Investigador` ADD CONSTRAINT `Investigador_fk0` FOREIGN KEY (`CURP`) REFERENCES `Usuario`(`CURP`);

ALTER TABLE `Investigador` ADD CONSTRAINT `Investigador_fk1` FOREIGN KEY (`id_instituto`) REFERENCES `Instituto`(`id_instituto`);

ALTER TABLE `Investigador` ADD CONSTRAINT `Investigador_fk2` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Instituto` ADD CONSTRAINT `Instituto_fk0` FOREIGN KEY (`id_campus`) REFERENCES `Campus`(`id_campus`);

ALTER TABLE `Telefono_instituto` ADD CONSTRAINT `Telefono_instituto_fk0` FOREIGN KEY (`id_instituto`) REFERENCES `Instituto`(`id_instituto`);

ALTER TABLE `Coautor` ADD CONSTRAINT `Coautor_fk0` FOREIGN KEY (`CURP`) REFERENCES `Usuario`(`CURP`);

ALTER TABLE `Administrador` ADD CONSTRAINT `Administrador_fk0` FOREIGN KEY (`CURP`) REFERENCES `Usuario`(`CURP`);

ALTER TABLE `Pertenecer_Grupo` ADD CONSTRAINT `Pertenecer_Grupo_fk0` FOREIGN KEY (`id_grupo`) REFERENCES `Grupo`(`id_grupo`);

ALTER TABLE `Pertenecer_Grupo` ADD CONSTRAINT `Pertenecer_Grupo_fk1` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Publicar_Articulo` ADD CONSTRAINT `Publicar_Articulo_fk0` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Publicar_Articulo` ADD CONSTRAINT `Publicar_Articulo_fk1` FOREIGN KEY (`id_articulo`) REFERENCES `Articulo`(`id_articulo`);

ALTER TABLE `Ser_Coautor_Articulo` ADD CONSTRAINT `Ser_Coautor_Articulo_fk0` FOREIGN KEY (`id_articulo`) REFERENCES `Articulo`(`id_articulo`);

ALTER TABLE `Ser_Coautor_Articulo` ADD CONSTRAINT `Ser_Coautor_Articulo_fk1` FOREIGN KEY (`id_coautor`) REFERENCES `Coautor`(`id_coautor`);

