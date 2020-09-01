module.exports = {
    name: 'mythicplus',
    description: "pulls the raider.io API to show this week's M+ affixes",
    execute(message, args){

    async () => {   
        let url = 'https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en';
    
        const response = await fetch(url);
        const affix = await response.json();
 
        console.log("mythicplus should have fired");
        message.channel.send(affix);
    } 

    }
}