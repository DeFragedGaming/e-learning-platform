require('dotenv').config();

const mysql = require('promise-mysql');

const createTcpPool = async config => {
  const dbConfig = {
    socketPath: '', 
    user: '',      
    password: '',  
    database:  ''      
    
  };

  return mysql.createPool(dbConfig);
};

// Function to get the database pool
const getPool = async () => {
  try {
    const pool = await createTcpPool({});
    console.log('Connected to Cloud SQL');
    return pool;
  } catch (err) {
    console.error('Error connecting to Cloud SQL: ', err);
    throw err;
  }
};

module.exports = { getPool };
