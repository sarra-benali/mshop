DROP DATABASE IF EXISTS m_shop;
CREATE DATABASE m_shop;
USE m_shop;

CREATE TABLE users (
   username  varchar(255) not null,
   email varchar(255),
   userPassword varchar(255),
   adresse varchar(255),
   phoneNumber varchar(255),
   accountCreateDate varchar(255),
   PRIMARY KEY (email)  
);

CREATE TABLE products (
   idProduct int not null AUTO_INCREMENT,
   categorieProduct varchar(255),
   descriptionProduct varchar(255),
   imageProduct varchar(255),
   priceProduct float,
   titleProduct varchar(255),
   rating float, 
   PRIMARY key (idProduct)
);

CREATE TABLE commandes (
   email varchar(255),
   idProduct int ,
   dateAndTime varchar(255),
   quantity int,
   unityPrice float,
   totalPrice float,
   streetName varchar(255),
   houseNumber varchar(255),
   postCode varchar (255),
   city varchar (255),
   userName varchar (255),
   phoneNumber varchar (255),
   confirm int null,
   PRIMARY key (email, idProduct, dateAndTime),
   Foreign KEY (email) references users (email),
   Foreign KEY (idProduct) references products(idProduct)
);

 

