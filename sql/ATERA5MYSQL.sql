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
	`telefono_institucion` INT NOT NULL,
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
	`entidad_colegio` varchar NOT NULL,
	`municipio_colegio` varchar NOT NULL,
	PRIMARY KEY (`id_colegio`)
);

CREATE TABLE `Telefono_Facultad` (
	`id_telefono_fac` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`id_colegio` INT NOT NULL UNIQUE,
	`telefono_fac` INT NOT NULL UNIQUE,
	PRIMARY KEY (`id_telefono_fac`)
);

CREATE TABLE `Posgrado_Facultad` (
	`id_posgrado` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_posgrado` varchar NOT NULL,
	PRIMARY KEY (`id_posgrado`)
);

CREATE TABLE `Dpto_Facultad` (
	`id_dpto_fac` INT NOT NULL AUTO_INCREMENT,
	`id_colegio` INT NOT NULL,
	`nombre_dpto_fac` varchar NOT NULL,
	PRIMARY KEY (`id_dpto_fac`)
);

CREATE TABLE `Instituto` (
	`id_instituto` INT NOT NULL AUTO_INCREMENT,
	`nombre_instituto` varchar NOT NULL,
	`entidad` varchar NOT NULL,
	`municipio` varchar NOT NULL,
	`ciudad` varchar NOT NULL,
	`calle_instituto` varchar NOT NULL,
	`no_direccion_instituto` INT NOT NULL,
	`es_instituto` BOOLEAN,
	`es_centro` BOOLEAN,
	`id_campus` INT NOT NULL,
	PRIMARY KEY (`id_instituto`)
);

CREATE TABLE `Persona` (
	`id_persona` INT NOT NULL AUTO_INCREMENT,
	`nombres_persona` varchar NOT NULL,
	`apellidos` varchar NOT NULL,
	`password` varchar NOT NULL,
	`aprobado` BOOLEAN NOT NULL,
	`email` varchar NOT NULL UNIQUE,
	PRIMARY KEY (`id_persona`)
);

CREATE TABLE `Telefono_Usuario` (
	`id_telefono_usuario` INT NOT NULL AUTO_INCREMENT,
	`id_usuario` INT NOT NULL,
	`telefono_usuario` INT NOT NULL,
	PRIMARY KEY (`id_telefono_usuario`)
);

CREATE TABLE `Investigador` (
	`id_investigador` INT NOT NULL AUTO_INCREMENT,
	`CV` TEXT NOT NULL,
	`id_usuario` INT NOT NULL,
	PRIMARY KEY (`id_investigador`)
);

CREATE TABLE `Investigador_Trabaja_Instituto` (
	`id_investigador_instituto` INT NOT NULL AUTO_INCREMENT,
	`id_investigador` INT NOT NULL,
	`id_instituto` INT NOT NULL,
	`fecha_inicio_trabajar_invest` DATE NOT NULL,
	`fecha_fin_trabajar_invest` DATE,
	PRIMARY KEY (`id_investigador_instituto`)
);

CREATE TABLE `Investigador_Trabaja_Dpto_Fac` (
	`id_invest_dpto_fac` INT NOT NULL AUTO_INCREMENT,
	`id_investigador` INT NOT NULL,
	`id_dpto_fac` INT NOT NULL,
	PRIMARY KEY (`id_invest_dpto_fac`)
);

CREATE TABLE `Coautor` (
	`id_coautor` INT NOT NULL AUTO_INCREMENT,
	`id_usuario` INT NOT NULL,
	`descripcion_coautor` TEXT,
	PRIMARY KEY (`id_coautor`)
);

CREATE TABLE `Articulo` (
	`id_articulo` INT NOT NULL AUTO_INCREMENT,
	`nombre_articulo` varchar NOT NULL,
	`area_articulo` varchar NOT NULL,
	PRIMARY KEY (`id_articulo`)
);

CREATE TABLE `Publicar_articulo` (
	`id_publicar_articulo` INT NOT NULL AUTO_INCREMENT,
	`id_investigador` INT NOT NULL,
	`id_articulo` INT NOT NULL,
	`fecha_publicacion` DATE NOT NULL,
	PRIMARY KEY (`id_publicar_articulo`)
);

CREATE TABLE `Ser_Coautor_articulo` (
	`id_ser_coautor` INT NOT NULL AUTO_INCREMENT,
	`id_articulo` INT NOT NULL,
	`id_coautor` INT NOT NULL,
	`fecha_registro` DATE NOT NULL,
	PRIMARY KEY (`id_ser_coautor`)
);

CREATE TABLE `Alumno` (
	`id_alumno` INT NOT NULL AUTO_INCREMENT,
	`id_usuario` INT NOT NULL,
	`becario` BOOLEAN NOT NULL,
	`grado_academico` varchar NOT NULL,
	PRIMARY KEY (`id_alumno`)
);

CREATE TABLE `Alumno_Trabaja_Investigador` (
	`id_alumno_investigador` INT NOT NULL AUTO_INCREMENT,
	`id_alumno` INT NOT NULL,
	`id_investigador` INT NOT NULL,
	`fecha_inicio_trabajar_alum` DATE NOT NULL,
	PRIMARY KEY (`id_alumno_investigador`)
);

CREATE TABLE `Administrador` (
	`id_admin` INT NOT NULL AUTO_INCREMENT,
	`id_usuario` INT NOT NULL,
	`es_investigador` BOOLEAN NOT NULL,
	PRIMARY KEY (`id_admin`)
);

ALTER TABLE `Telefono_Institucion` ADD CONSTRAINT `Telefono_Institucion_fk0` FOREIGN KEY (`id_institucion`) REFERENCES `Institucion`(`id_institucion`);

ALTER TABLE `Campus` ADD CONSTRAINT `Campus_fk0` FOREIGN KEY (`id_institucion`) REFERENCES `Institucion`(`id_institucion`);

ALTER TABLE `Colegio` ADD CONSTRAINT `Colegio_fk0` FOREIGN KEY (`id_campus`) REFERENCES `Campus`(`id_campus`);

ALTER TABLE `Telefono_Facultad` ADD CONSTRAINT `Telefono_Facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Posgrado_Facultad` ADD CONSTRAINT `Posgrado_Facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Dpto_Facultad` ADD CONSTRAINT `Dpto_Facultad_fk0` FOREIGN KEY (`id_colegio`) REFERENCES `Colegio`(`id_colegio`);

ALTER TABLE `Instituto` ADD CONSTRAINT `Instituto_fk0` FOREIGN KEY (`id_campus`) REFERENCES `Campus`(`id_campus`);

ALTER TABLE `Telefono_Usuario` ADD CONSTRAINT `Telefono_Usuario_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Persona`(`id_persona`);

ALTER TABLE `Investigador` ADD CONSTRAINT `Investigador_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Persona`(`id_persona`);

ALTER TABLE `Investigador_Trabaja_Instituto` ADD CONSTRAINT `Investigador_Trabaja_Instituto_fk0` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Investigador_Trabaja_Instituto` ADD CONSTRAINT `Investigador_Trabaja_Instituto_fk1` FOREIGN KEY (`id_instituto`) REFERENCES `Instituto`(`id_instituto`);

ALTER TABLE `Investigador_Trabaja_Dpto_Fac` ADD CONSTRAINT `Investigador_Trabaja_Dpto_Fac_fk0` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Investigador_Trabaja_Dpto_Fac` ADD CONSTRAINT `Investigador_Trabaja_Dpto_Fac_fk1` FOREIGN KEY (`id_dpto_fac`) REFERENCES `Dpto_Facultad`(`id_dpto_fac`);

ALTER TABLE `Coautor` ADD CONSTRAINT `Coautor_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Persona`(`id_persona`);

ALTER TABLE `Publicar_articulo` ADD CONSTRAINT `Publicar_articulo_fk0` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Publicar_articulo` ADD CONSTRAINT `Publicar_articulo_fk1` FOREIGN KEY (`id_articulo`) REFERENCES `Articulo`(`id_articulo`);

ALTER TABLE `Ser_Coautor_articulo` ADD CONSTRAINT `Ser_Coautor_articulo_fk0` FOREIGN KEY (`id_articulo`) REFERENCES `Articulo`(`id_articulo`);

ALTER TABLE `Ser_Coautor_articulo` ADD CONSTRAINT `Ser_Coautor_articulo_fk1` FOREIGN KEY (`id_coautor`) REFERENCES `Coautor`(`id_coautor`);

ALTER TABLE `Alumno` ADD CONSTRAINT `Alumno_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Persona`(`id_persona`);

ALTER TABLE `Alumno_Trabaja_Investigador` ADD CONSTRAINT `Alumno_Trabaja_Investigador_fk0` FOREIGN KEY (`id_alumno`) REFERENCES `Alumno`(`id_alumno`);

ALTER TABLE `Alumno_Trabaja_Investigador` ADD CONSTRAINT `Alumno_Trabaja_Investigador_fk1` FOREIGN KEY (`id_investigador`) REFERENCES `Investigador`(`id_investigador`);

ALTER TABLE `Administrador` ADD CONSTRAINT `Administrador_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Persona`(`id_persona`);

