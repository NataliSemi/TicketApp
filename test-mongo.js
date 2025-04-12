// test-mongo.js
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect('mongodb+srv://pcadmin:WagCj5qZkbLzQNaE@cluster0.85p5ljt.mongodb.net/TicketDB');
    console.log('Connected successfully!');
    await mongoose.connection.close();
  } catch (error) {
    console.error('Connection error:', error);
  }
}

testConnection();