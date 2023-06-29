import dotenv from 'dotenv';
import mysql, { Connection } from 'mysql';

dotenv.config();

const connection: Connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  allowPublicKeyRetrieval: true,
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);

      // If connected successfully, create a new table
      const createTableSql = `
      CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      )
    `;
  
    connection.query(createTableSql, (err) => {
      if (err) throw err;
      console.log('Users table created.');
  
      // After table is created, insert some data
      const insertDataSql = `
        INSERT INTO Users (name, email)
        VALUES ('John Doe', 'john.doe@example.com'),
               ('Jane Doe', 'jane.doe@example.com')
      `;

      connection.query(insertDataSql, (err) => {
        if (err) throw err;
        console.log('Data inserted into Users table.');
      });
    });
});

export default connection;
