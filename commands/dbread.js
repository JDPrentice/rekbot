const sqlite3 = require('sqlite3').verbose();

module.exports = {
    name: 'dbread',
    description: "testing reading from the db",
    execute(message, args) {

        var messageStored = args.toString();
        messageStored = messageStored.replace(/,/g, " ");

        let sql = `SELECT * FROM messages WHERE author = '${messageStored}'`;

        let db = new sqlite3.Database('./data/messages.db', (err) => {
            if (err) {
              return console.error(err);
            }
            console.log('dbRead command has fired - connected to the messages.db SQlite database.');
          });

          db.each(sql, (err, row) => {
              if(err) {
                  return console.log(err);
              }
              return row
              ? message.channel.send(`${row.author} left the message: ${row.message_content}`)
              : message.reply("No message could be found");
          });

          db.close();

    }
}