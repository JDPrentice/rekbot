const Discord = require('discord.js');
const config = require("./config.json"); //bot token is pulled from this file


const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

var helpOutputs = commandFiles.toString();
helpOutputs = helpOutputs.replace(/.js/g, " ");
helpOutputs = helpOutputs.replace(/,/g, ", ");

var helpArray = helpOutputs.split(', ');

client.once('ready', () => {
	console.log('rekbot is online!');
	console.log(commandFiles ,'have been loaded');
	
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	//leaving in the classic for testing purposes
	if (command === 'ping') {
	const timeTaken = Date.now() - message.createdTimestamp;	 
	message.channel.send(`pong! Latency of ${timeTaken}ms`);	
	}
	
	else if (command === 'rank') {
		console.log('ignoring rank command');
		
	}	
	
	else if (command === 'help') {
	client.commands.get('help').execute(message, args);	
	message.channel.send(helpArray);
	message.channel.send("**Please note:** the syntax required for RaiderIO is: !raiderio realm character (and the command will only function for EU realms)");
	}

	// Idea for the command is to display what servers the bot is connected to, and then how many users are in each server - placed in index so the command is hidden from !help
	// else if (command === 'rekbotstats') {
	// I think need to use .fetchGuildPreview to call the discord API & return a promise, before server ('guilds') information shows
	//	message.channel.send(`Rekbot is currently running on ${client.guilds.cache}`);
	// }

	else try {
		client.commands.get(command).execute(message, args);
	}	catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command - are you sure it exists? Check with the !help command');
	}

});

	client.login(config.BOT_TOKEN);

