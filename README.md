# Email generator:
- generates 500 random emails with past created dates
- a Node.Js app with mySql

## Create and populate the users table in users_emails database:
- create database: 
        CREATE DATABASE users_emails
- create table: 
        CREATE TABLE users(
            email VARCHAR(255) PRIMARY KEY,
            created_at TIMESTAMP DEFAULT NOW()
        );
- npm start

## Environmental variables: 
    MYSQL_HOST=localhost
    MYSQL_USER --> your user
    MYSQL_PASSWORD --> your password

## Dependencies:
    "dotenv": "^10.0.0",
    "faker": "^5.5.3",
    "mysql": "^2.18.1"