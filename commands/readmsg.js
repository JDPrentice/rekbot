const fs = require('fs');

module.exports = {
    name: 'readmsg',
    description: "reads out the message left with rekbot",
    execute(message, args){

        let msgData = JSON.parse(fs.readFileSync('./data/msglog.json', 'utf8'));

        message.reply(`${msgData.praise} - this lovely message was left by ${msgData.author}`);

    }
}

            
        
