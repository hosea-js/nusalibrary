const db = require('./db');

async function testConnection() {
  try {
    await db.getConnection();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();