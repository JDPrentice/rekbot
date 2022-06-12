// Will create messages.db if it doesn't exist

const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./data/messages.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the messages.db SQlite database.');
});


db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('DB Connection closed');
});