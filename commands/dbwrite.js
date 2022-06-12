const sqlite3 = require('sqlite3').verbose();

module.exports = {
    name: 'dbwrite',
    description: "testing writing to the db",
    execute(message, args) {

        var messageStored = args.toString();
        messageStored = messageStored.replace(/,/g, " ");

        let db = new sqlite3.Database('./data/messages.db', (err) => {
            if (err) {
              return console.error(err);
            }
            console.log('dbWrite command has fired - connected to the messages.db SQlite database.');
          });

          db.run(`INSERT INTO messages(author, message_content) VALUES(?, ?)`, [`${message.author.username}`, `${messageStored}`], (err) => {
              if(err) {
                  return console.log(err);
              }
              message.reply(`Message added!`);
          });

          db.close();

    }
}