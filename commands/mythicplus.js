module.exports = {
    name: 'mythicplus',
    description: "pulls the raider.io API to show this week's M+ affixes",
    execute(message, args){

    try {    
      
        let url = 'https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en';

        const response = fetch(url);
        const affix = response.json();
 
        console.log("mythicplus should have fired");
        message.channel.send("mythicplus should have fired");
     
         }

    catch (error){
        console.error(error);
		message.reply("The Mythic Plus command has failed");
                }     
}
}