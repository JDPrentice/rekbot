module.exports = {
    name: 'online',
    description: "calls the Battlemetrics API",
    execute(message, args) {

        const fetch = require('node-fetch');
        let url = `https://api.battlemetrics.com/servers/14910891`;
	let url2 = `https://api.battlemetrics.com/servers/14911398`;
	let url3 = `https://api.battlemetrics.com/servers/14906935`;
	let url4 = `https://api.battlemetrics.com/servers/14915593`;
	let url5 = `https://api.battlemetrics.com/servers/15015841`;
	let url6 = `https://api.battlemetrics.com/servers/14910892`;
    let url7 = `https://api.battlemetrics.com/servers/15551025`;

        fetch(url)
            .then(response => {
                console.log("Online command used - Battlemetrics Lost Island API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Lost Island API");
            });
            });

        fetch(url2)
            .then(response => {
                console.log("Online command used - Battlemetrics Valg API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Valg API");
            });
            });

        fetch(url3)
            .then(response => {
                console.log("Online command used - Battlemetrics Island API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Island API");
            });
            });

        fetch(url4)
            .then(response => {
                console.log("Online command used - Battlemetrics Rolling Map API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Rolling Map API");
            });
            });

        fetch(url5)
            .then(response => {
                console.log("Online command used - Battlemetrics Ragnarok API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Ragnarok API");
            });
            });

        fetch(url6)
            .then(response => {
                console.log("Online command used - Battlemetrics Aberration API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Aberration API");
            });
            });
            
                    fetch(url7)
            .then(response => {
                console.log("Online command used - Battlemetrics Fjordur API called");
                console.log("API Status " + response.statusText + " " + response.url);

                response.json().then(data => {
                    message.channel.send(`${data.data.attributes.name} is **${data.data.attributes.status}**, and has **${data.data.attributes.players}** players currently online`);


            }).catch(error => {
                console.error(error);
                message.reply("The Online command has failed - Fjordur API");
            });
            });
}
}
