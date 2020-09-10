const fs = require('fs');
praiseData = require('../data/msglog.json')

module.exports = {
    name: 'setmsg',
    description: "leaves a message with rekbot",
    execute(message, args){

    var praiseMsg = args.toString();
    praiseMsg = praiseMsg.replace(/,/g, " ");

    praiseData = {
        praise: praiseMsg,
        author: message.author.username
    }



    fs.writeFile ('./data/msglog.json', JSON.stringify (praiseData, null, 4), err => {
        if (err) throw err;
        message.reply("your message has been saved");
    });

}
}