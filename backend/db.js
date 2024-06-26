require('dotenv').config();

const mysql = require('promise-mysql');

const createTcpPool = async config => {
  const dbConfig = {
    socketPath: 'green-campaign-427512-s1:us-central1:mysql-instance', 
    user: 'root',      
    password: 'DeFraged#2020',  
    database: 'elearning'       
    
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