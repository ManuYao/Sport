const validateEnv = () => {
    const required = [
      'PORT',
      'MONGODB_URI',
      'NODE_ENV',
      'CORS_ORIGIN'
    ];
  
    for (const item of required) {
      if (!process.env[item]) {
        throw new Error(`Missing required environment variable: ${item}`);
      }
    }
  };
  
  module.exports = validateEnv;