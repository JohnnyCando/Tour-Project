# TriHard-Reservations Server

Installation
```bash
npm install
```
or
```bash
yarn install
```
## To Run
```bash
npm run start
```
With Nodemon
```bash
npm run nodemon
```
### Create role
```bash
CREATE USER tour_user PASSWORD '123456';
ALTER ROLE tour_user WITH SUPERUSER;
ALTER ROLE tour_user WITH LOGIN;
```
### Create Database 
```bash
CREATE DATABASE "tour_yavirac_db"
    WITH 
    OWNER = tour_user
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```
### Create Schemas
```
   CREATE SCHEMA IF NOT EXISTS access AUTHORIZATION tour_user;
   CREATE SCHEMA IF NOT EXISTS persons AUTHORIZATION tour_user;
   CREATE SCHEMA IF NOT EXISTS processes AUTHORIZATION tour_user;
   CREATE SCHEMA IF NOT EXISTS catalogs AUTHORIZATION tour_user;
```
### Migrate the tables
```
 knex migrate:latest
```


### Add records in the tables #Dates testing
```bash
knex seed:run
```

### To do tests in postman
url = localhost:8000/users




