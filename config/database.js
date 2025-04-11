const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');
  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME' ),
        user: env('DATABASE_USERNAME' ),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      debug:false
    }
  };
  

  return {
    
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
