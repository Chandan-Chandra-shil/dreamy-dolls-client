import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto container mb-10">
      <div className="min-h-screen  ">
        <h1 className="text-center  py-10 text-purple-500 text-4xl font-bold">
          Blog-Page
        </h1>
        <div className="shadow-inherit p-10 bg-gray-100">
          <h2 className="text-3xl font-semibold">
            1 . What is an access token and refresh token?
          </h2>
          <p>
            <span className="text-2xl text-purple-500"> Access Token: </span>
            <br />
            <span className="text-lg space-y-2">
              An access token is a credential that is issued by an
              authentication server after a user successfully logs in or
              authorizes an application.It represents the user identity and is
              typically a string of characters.Access tokens have a limited
              lifespan and are used to authenticate and authorize subsequent API
              requests made by the client.These tokens are usually included in
              the Authorization header of API requests as a Bearer token or in
              the request parameters.
            </span>
          </p>
          <p>
            <span className="text-2xl text-purple-500">Refresh Token: </span>
            <br />
            <span className="text-lg space-y-2">
              A refresh token is a long-lived credential that is also issued by
              the authentication server during the login or authorization
              process.Unlike access tokens, refresh tokens are not meant to be
              included in API requests.Refresh tokens are securely stored on the
              client-side more on this below and are used to obtain a new access
              token when the current access token expires.When the access token
              expires, the client sends a request to the authentication server
              with the refresh token, and if valid, the server responds with a
              new access token, allowing the user to continue using the
              application without having to re-enter their credentials.
            </span>
          </p>
        </div>
        <div className="shadow-inherit p-10 bg-gray-100">
          <h2 className="text-3xl font-semibold">
            2 . How do they work and where should we store them on the
            client-side?
          </h2>
          <p>
            <span className="text-lg space-y-2">
              Access tokens should be stored on the client-side but not in
              persistent storage (e.g., cookies or local storage) due to
              security risks like cross-site scripting (XSS) attacks.The
              recommended approach is to store the access token in memory (e.g.,
              in a variable) and include it in API requests as needed.Refresh
              tokens, on the other hand, are long-lived and need to be stored
              securely on the client-side, as they are used to obtain new access
              tokens.A common practice is to store the refresh token in an
              HTTP-only cookie, which adds an extra layer of security as the
              cookie is not accessible to JavaScript code. The cookie should
              have the secure and SameSite attributes set to enhance security
              further.
            </span>
          </p>
        </div>
        <div className="shadow-inherit p-10 bg-gray-100">
          <h2 className="text-3xl font-semibold">
            3 . Compare SQL and NoSQL databases?
          </h2>
          <p>
            <span className="text-2xl text-purple-500"> SQL Databases:</span>
            <br />
            <span className="text-lg space-y-2">
              Structured: SQL databases use a structured schema to define the
              tables, columns, and relationships between data entities.
              Relational: SQL databases are based on the relational model,
              emphasizing the relationships between tables using primary and
              foreign keys. ACID Compliance: SQL databases guarantee ACID
              (Atomicity, Consistency, Isolation, Durability) properties,
              ensuring data integrity and transactional consistency. Schema
              Enforcement: SQL databases enforce a predefined schema, meaning
              the data must adhere to the structure specified in the schema.
              Flexible Queries: SQL databases use the SQL language for querying
              data, providing a powerful and expressive way to retrieve and
              manipulate structured data. Examples: MySQL, PostgreSQL, Oracle
              Database, SQL Server.
            </span>
          </p>
          <p>
            <span className="text-2xl text-purple-500">NoSQL Databases: </span>
            <br />
            <span className="text-lg space-y-2">
              Flexible Schema: NoSQL databases have a flexible schema, allowing
              for dynamic and schema-less data models. They can handle
              unstructured or semi-structured data. Non-relational: NoSQL
              databases do not adhere strictly to the relational model and often
              use key-value, document, columnar, or graph-based data models.
              Horizontal Scalability: NoSQL databases are designed to scale
              horizontally, meaning they can distribute data across multiple
              servers or nodes for improved performance and scalability.
              Eventual Consistency: NoSQL databases often prioritize scalability
              and performance over strict consistency, providing eventual
              consistency guarantees in distributed environments. No Complex
              Joins: NoSQL databases may not support complex joins between
              tables and may require denormalization or restructuring of data to
              optimize performance. Examples: MongoDB, Cassandra, CouchDB,
              Redis, Neo4j.
            </span>
          </p>
        </div>
        <div className="shadow-inherit p-10 bg-gray-100">
          <h2 className="text-3xl font-semibold">
            4 . What is express js? What is Nest js ?
          </h2>
          <p>
            <span className="text-2xl text-purple-500"> Express.js:</span>
            <br />
            <span className="text-lg space-y-2">
              Express.js is a minimalistic and flexible web application
              framework for Node.js. It provides a simple and intuitive API to
              build web applications and APIs. Express.js is unopinionated,
              which means it does not enforce any specific architectural pattern
              or directory structure, giving developers a lot of freedom and
              flexibility. It offers features like routing, middleware support,
              template engines, and easy integration with other libraries and
              modules. Express.js has a large and active community with a vast
              ecosystem of middleware and extensions available. It is
              well-suited for small to medium-sized applications and RESTful
              APIs.
            </span>
          </p>
          <p>
            <span className="text-2xl text-purple-500">NestJS: </span>
            <br />
            <span className="text-lg space-y-2">
              NestJS is a progressive, opinionated, and full-featured web
              framework for building scalable and maintainable server-side
              applications. It is inspired by Angular s architecture and uses
              TypeScript as the primary programming language. NestJS promotes
              the use of modular and organized code structures, providing a
              built-in dependency injection (DI) system and powerful decorators
              for defining modules, controllers, services, and more. It
              leverages decorators and metadata to enable features like routing,
              parameter validation, serialization, and dependency injection.
              NestJS also includes features like middleware, exception handling,
              authentication, and database integration. It focuses on developer
              productivity, code maintainability, and scalability, making it a
              popular choice for building enterprise-level applications and
              microservices.
            </span>
          </p>
        </div>
        <div className="shadow-inherit p-10 bg-gray-100">
          <h2 className="text-3xl font-semibold">
            5 .What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            
            
            <span className="text-lg space-y-2">
              MongoDB s aggregation framework is a powerful tool for performing
              advanced data processing and analysis on MongoDB collections. It
              allows you to perform complex transformations and computations on
              the data stored in your MongoDB database. The aggregation
              framework operates on a collection of documents and provides a set
              of pipeline stages that can be combined to define a sequence of
              data processing steps. Each stage takes the input documents,
              performs some operation on them, and passes the results to the
              next stage in the pipeline. The stages can include various
              operations like filtering, grouping, sorting, projecting, joining,
              and performing mathematical or statistical calculations
            </span>
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
