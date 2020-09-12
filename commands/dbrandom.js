const sqlite3 = require('sqlite3').verbose();

module.exports = {
    name: 'dbrandom',
    description: "testing reading from the db - random pullback",
    execute(message, args) {

    //    var messageStored = args.toString();
    //    messageStored = messageStored.replace(/,/g, " ");

        let sql = 'SELECT * FROM messages ORDER BY RANDOM() LIMIT 1';

        let db = new sqlite3.Database('./data/messages.db', (err) => {
            if (err) {
              return console.error(err);
            }
            console.log('dbRandom command has fired - connected to the messages.db SQlite database.');
          });

          db.get(sql, (err, row) => {
              if(err) {
                  return console.log(err);
              }
              return row
              ? message.channel.send(`**A random message has been retrieved to fulfill your desires!** \n ${row.author} left the message: ${row.message_content}`)
              : message.reply("No message could be found");
          });

          db.close();

    }
}