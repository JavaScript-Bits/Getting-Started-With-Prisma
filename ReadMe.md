## Getting Started With Prisma

An ORM, Object Relational Mapper, is a piece of software used to translate between the data representations used by databases and those used in object oriented programming.

Prisma consists of the following parts-:

 1. #### Prisma Client
 - Auto-generated and type-safe query builder for node and typescript.

 2. #### Prisma Migrate
 - Migration tool to easily evolve your database schema from prototyping to production

 3. #### Prisma Studio
 - GUI to view and edit data in your database.

Prisma Client can be used in any Node.js (supported versions) or TypeScript backend application (including serverless applications and microservices). This can be a REST API, a GraphQL API, a gRPC API, or anything else that needs a database.

### How Prisma Works

#### Prisma Schema

Every project that utilises the prisma toolkit starts with a Prisma Schema file. This is where developers define the application models

A prisma schema file mainly consists of three things-:

 1. #### Data Source 
 - Specifies your database connection
 2. #### Generator
 - Indicates that you want to generate a Prisma client
 3. #### Data Model
 - Defines your application models

The data model is a collection of models. A model plays two major roles,

 - Represent a table in relational databases or a collection in MongoDB
 - Provide the foundation for the queries in the Prisma Client API

#### Getting a data model

There are two major workflows for "getting" a data model into your Prisma schema:

 - Manually writing the data model and mapping it to the database with Prisma Migrate
 - Generating the data model by introspecting a database

Once the data model is defined, you can generate Prisma Client which will expose CRUD and more queries for the defined models.