CREATE TABLE "Institucion" (
	"id_institucion" serial NOT NULL,
	"nombre_institucion" varchar(100) NOT NULL,
	"es_publica" BOOLEAN,
	"es_independiente" BOOLEAN,
	CONSTRAINT Institucion_pk PRIMARY KEY ("id_institucion")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Telefono_Institucion" (
	"id_telefono_institucion" serial NOT NULL,
	"id_institucion" serial NOT NULL,
	CONSTRAINT Telefono_Institucion_pk PRIMARY KEY ("id_telefono_institucion")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Campus" (
	"id_campus" serial NOT NULL,
	"nombre_campus" varchar NOT NULL,
	"estado" varchar(60) NOT NULL UNIQUE,
	"municipio" varchar(60) NOT NULL,
	"id_institucion" varchar(60) NOT NULL,
	CONSTRAINT Campus_pk PRIMARY KEY ("id_campus")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Colegio" (
	"id_colegio" serial NOT NULL,
	"nombre_colegio" varchar NOT NULL,
	"ciudad" varchar NOT NULL,
	"calle" varchar NOT NULL,
	"numero_calle" varchar NOT NULL,
	"esFacultad" BOOLEAN,
	"esEscuela" BOOLEAN,
	"id_campus" integer NOT NULL,
	"entidad" varchar NOT NULL,
	"municipio" varchar NOT NULL,
	CONSTRAINT Colegio_pk PRIMARY KEY ("id_colegio")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Telefono_fac" (
	"id_telefono_fac" serial NOT NULL UNIQUE,
	"id_colegio" integer NOT NULL UNIQUE,
	"telefono_fac" integer NOT NULL UNIQUE,
	CONSTRAINT Telefono_fac_pk PRIMARY KEY ("id_telefono_fac")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Carrera_facultad" (
	"id_carrera_fac" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	"nombre_carrera_fac" varchar NOT NULL,
	CONSTRAINT Carrera_facultad_pk PRIMARY KEY ("id_carrera_fac")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Posgrado_facultad" (
	"id_posgrado" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	"nombre_posgrado" varchar NOT NULL,
	CONSTRAINT Posgrado_facultad_pk PRIMARY KEY ("id_posgrado")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Telefono_escuela" (
	"id_telefono_escuela" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	"telefono_escuela" integer NOT NULL UNIQUE,
	CONSTRAINT Telefono_escuela_pk PRIMARY KEY ("id_telefono_escuela")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Carrera_escuela" (
	"id_carrera_escuela" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	"nombre_carrera_escuela" varchar NOT NULL,
	CONSTRAINT Carrera_escuela_pk PRIMARY KEY ("id_carrera_escuela")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Dpto_Facultad" (
	"id_dpto_fac" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	"nombre_dpto_fac" varchar NOT NULL,
	CONSTRAINT Dpto_Facultad_pk PRIMARY KEY ("id_dpto_fac")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Depto_Escuela" (
	"id_dpto_escuela" serial NOT NULL,
	"id_colegio" integer NOT NULL,
	CONSTRAINT Depto_Escuela_pk PRIMARY KEY ("id_dpto_escuela")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Usuario" (
	"CURP" serial(18) NOT NULL,
	"nombre_usuario" varchar NOT NULL,
	"apellido_paterno" varchar NOT NULL,
	"apellido_materno" varchar NOT NULL,
	"telefono_usuario" integer NOT NULL,
	"password" varchar NOT NULL,
	"aprobado" BOOLEAN NOT NULL,
	CONSTRAINT Usuario_pk PRIMARY KEY ("CURP")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Investigador" (
	"id_investigador" serial NOT NULL,
	"CURP" varchar(18) NOT NULL,
	"CV" TEXT NOT NULL,
	"id_instituto" integer NOT NULL,
	"id_colegio" integer,
	CONSTRAINT Investigador_pk PRIMARY KEY ("id_investigador")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Instituto" (
	"id_instituto" serial NOT NULL,
	"nombre_instituto" varchar NOT NULL,
	"entidad" varchar NOT NULL,
	"municipio" varchar NOT NULL,
	"ciudad" varchar NOT NULL,
	"calle" varchar NOT NULL,
	"numero_calle_instituto" varchar NOT NULL,
	"id_campus" integer NOT NULL,
	"es_instituto" BOOLEAN,
	"es_centro" BOOLEAN,
	CONSTRAINT Instituto_pk PRIMARY KEY ("id_instituto")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Telefono_instituto" (
	"id_telefono_instituto" serial NOT NULL,
	"id_instituto" integer NOT NULL,
	"telefono_instituto" integer NOT NULL,
	CONSTRAINT Telefono_instituto_pk PRIMARY KEY ("id_telefono_instituto")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Coautor" (
	"id_coautor" serial NOT NULL,
	"CURP" varchar(18) NOT NULL,
	CONSTRAINT Coautor_pk PRIMARY KEY ("id_coautor")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Articulo" (
	"id_articulo" serial NOT NULL,
	"fecha_publicacion" DATE NOT NULL,
	"descripcion" TEXT,
	"nombre_articulo" varchar NOT NULL,
	CONSTRAINT Articulo_pk PRIMARY KEY ("id_articulo")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Administrador" (
	"id_admin" serial NOT NULL,
	"CURP" varchar(18) NOT NULL,
	CONSTRAINT Administrador_pk PRIMARY KEY ("id_admin")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Pertenecer_Grupo" (
	"id_pertenecer_grupo" serial NOT NULL,
	"id_grupo" integer NOT NULL,
	"id_investigador" integer NOT NULL,
	"fecha_inicio_pertenecer" DATE NOT NULL,
	"fecha_fin_pertenecer" DATE,
	CONSTRAINT Pertenecer_Grupo_pk PRIMARY KEY ("id_pertenecer_grupo")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Grupo" (
	"id_grupo" serial NOT NULL,
	"nombre_grupo" varchar NOT NULL UNIQUE,
	"descripcion_grupo" TEXT NOT NULL UNIQUE,
	"fecha_inicio_grupo" DATE NOT NULL,
	"fecha_fin_grupo" DATE,
	CONSTRAINT Grupo_pk PRIMARY KEY ("id_grupo")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Publicar_Articulo" (
	"id_publicar_articulo" serial NOT NULL,
	"id_investigador" integer NOT NULL,
	"id_articulo" integer NOT NULL,
	"fecha_publicacion" DATE NOT NULL,
	CONSTRAINT Publicar_Articulo_pk PRIMARY KEY ("id_publicar_articulo")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Ser_Coautor_Articulo" (
	"id_ser_coautor_aritculo" serial NOT NULL,
	"id_articulo" integer NOT NULL,
	"id_coautor" integer NOT NULL,
	"fecha_registro" DATE NOT NULL,
	CONSTRAINT Ser_Coautor_Articulo_pk PRIMARY KEY ("id_ser_coautor_aritculo")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Telefono_Institucion" ADD CONSTRAINT "Telefono_Institucion_fk0" FOREIGN KEY ("id_institucion") REFERENCES "Institucion"("id_institucion");

ALTER TABLE "Campus" ADD CONSTRAINT "Campus_fk0" FOREIGN KEY ("id_institucion") REFERENCES "Institucion"("id_institucion");

ALTER TABLE "Colegio" ADD CONSTRAINT "Colegio_fk0" FOREIGN KEY ("id_campus") REFERENCES "Campus"("id_campus");

ALTER TABLE "Telefono_fac" ADD CONSTRAINT "Telefono_fac_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Carrera_facultad" ADD CONSTRAINT "Carrera_facultad_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Posgrado_facultad" ADD CONSTRAINT "Posgrado_facultad_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Telefono_escuela" ADD CONSTRAINT "Telefono_escuela_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Carrera_escuela" ADD CONSTRAINT "Carrera_escuela_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Dpto_Facultad" ADD CONSTRAINT "Dpto_Facultad_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Depto_Escuela" ADD CONSTRAINT "Depto_Escuela_fk0" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");


ALTER TABLE "Investigador" ADD CONSTRAINT "Investigador_fk0" FOREIGN KEY ("CURP") REFERENCES "Usuario"("CURP");
ALTER TABLE "Investigador" ADD CONSTRAINT "Investigador_fk1" FOREIGN KEY ("id_instituto") REFERENCES "Instituto"("id_instituto");
ALTER TABLE "Investigador" ADD CONSTRAINT "Investigador_fk2" FOREIGN KEY ("id_colegio") REFERENCES "Colegio"("id_colegio");

ALTER TABLE "Instituto" ADD CONSTRAINT "Instituto_fk0" FOREIGN KEY ("id_campus") REFERENCES "Campus"("id_campus");

ALTER TABLE "Telefono_instituto" ADD CONSTRAINT "Telefono_instituto_fk0" FOREIGN KEY ("id_instituto") REFERENCES "Instituto"("id_instituto");

ALTER TABLE "Coautor" ADD CONSTRAINT "Coautor_fk0" FOREIGN KEY ("CURP") REFERENCES "Usuario"("CURP");


ALTER TABLE "Administrador" ADD CONSTRAINT "Administrador_fk0" FOREIGN KEY ("CURP") REFERENCES "Usuario"("CURP");

ALTER TABLE "Pertenecer_Grupo" ADD CONSTRAINT "Pertenecer_Grupo_fk0" FOREIGN KEY ("id_grupo") REFERENCES "Grupo"("id_grupo");
ALTER TABLE "Pertenecer_Grupo" ADD CONSTRAINT "Pertenecer_Grupo_fk1" FOREIGN KEY ("id_investigador") REFERENCES "Investigador"("id_investigador");


ALTER TABLE "Publicar_Articulo" ADD CONSTRAINT "Publicar_Articulo_fk0" FOREIGN KEY ("id_investigador") REFERENCES "Investigador"("id_investigador");
ALTER TABLE "Publicar_Articulo" ADD CONSTRAINT "Publicar_Articulo_fk1" FOREIGN KEY ("id_articulo") REFERENCES "Articulo"("id_articulo");

ALTER TABLE "Ser_Coautor_Articulo" ADD CONSTRAINT "Ser_Coautor_Articulo_fk0" FOREIGN KEY ("id_articulo") REFERENCES "Articulo"("id_articulo");
ALTER TABLE "Ser_Coautor_Articulo" ADD CONSTRAINT "Ser_Coautor_Articulo_fk1" FOREIGN KEY ("id_coautor") REFERENCES "Coautor"("id_coautor");

