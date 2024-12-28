// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits ,StringSelectMenuBuilder,ActionRowBuilder} = require('discord.js');
const { token } = require('../config.json');
// Create a new client instance
const client = new Client({ intents: [
    
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,

] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
}); 
let executed = false;
client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
 });
 
 client.on('interactionCreate', async interaction => {
   if (!interaction.isChatInputCommand()) return;
 
   if (interaction.commandName === 'ping') {
     await interaction.reply('Pong!');
   }
   
   /*if (interaction.commandName === '你想吃什麼'){
    
    await interaction.reply('你有什麼想吃的食物類型(請填代號)     1.飯食  2.麵食  3.鍋燒  4.炸物  5.老麥(單點)  6.老麥(套餐)');
    
    const collector = interaction.channel.createMessageCollector({
      filter: (msg) => msg.author.id == interaction.user.id,
      max: 1,
    })
    
    collector.on('collect', (message) => {
      if(message.content === '1')
      {
      const fs = require('fs');
      const rawData = fs.readFileSync('./meun.json', 'utf-8');
      const data = JSON.parse(rawData);
      let ram = Math.floor(((Math.random())*10000)%14);
      const s = data.meals[ram]; 
      message.reply(s.name.toString()+"  "+s.price.toString());// 索引 1 對應到第二個元素
      }
      
      if(message.content === '2')
      {
        const fs = require('fs');
        const rawData = fs.readFileSync('./meun.json', 'utf-8');
        const data = JSON.parse(rawData);
        let ram = Math.floor(((Math.random())*10000)%11);
        const s = data.Pasta[ram]; 
        message.reply(s.name.toString()+"  "+s.price.toString());
      } 
      if(message.content === '3')
      {
        const fs = require('fs');
        const rawData = fs.readFileSync('./meun.json', 'utf-8');
        const data = JSON.parse(rawData);
        let ram = Math.floor(((Math.random())*10000)%18);
        const s = data.Potroast[ram]; 
        message.reply(s.name.toString()+"  "+s.price.toString());
      }
      if(message.content === '4')
      {
        const fs = require('fs');
        const rawData = fs.readFileSync('./meun.json', 'utf-8');
        const data = JSON.parse(rawData);
        let ram = Math.floor(((Math.random())*10000)%9);
        const s = data.Friedfood[ram]; 
        message.reply(s.name.toString()+"  "+s.price.toString());
      }
      if(message.content === '5')
        {
          const fs = require('fs');
          const rawData = fs.readFileSync('./oldm.json', 'utf-8');
          const data = JSON.parse(rawData);
          let ram1 = Math.floor(((Math.random())*10000)%20);
          const s1 = data.mainmeal[ram1]; 
          message.reply(s1.name.toString());
        }
      if(message.content === '6')
        {
          const fs = require('fs');
          const rawData = fs.readFileSync('./oldm.json', 'utf-8');
          const data = JSON.parse(rawData);
          let ram1 = Math.floor(((Math.random())*10000)%20);
          let ram2 = Math.floor(((Math.random())*10000)%3);
          let ram3 = Math.floor(((Math.random())*10000)%4);
          const s1 = data.mainmeal[ram1]; 
          const s2 =data.Comeswithmeal[ram2];
          const s3 = data.drinks[ram3];
          message.reply(s1.name.toString()+"　"+"+"+"　"+s2.name.toString()+"　"+"+"+"　"+s3.name.toString());
        }
    });
  }*/

    if (interaction.commandName === '食物選單') {
      const fs = require('fs');
          const rawData2 = fs.readFileSync('./oldm.json', 'utf-8');
          const data2 = JSON.parse(rawData2);
          const rawData = fs.readFileSync('./meun.json', 'utf-8');
          const data = JSON.parse(rawData); 
        let ram1 = Math.floor(((Math.random())*10000)%14);
        const s1 = data.meals[ram1]; 
        let ram2 = Math.floor(((Math.random())*10000)%11);
        const s2 = data.Pasta[ram2]; 
        let ram3 = Math.floor(((Math.random())*10000)%18);
        const s3 = data.Potroast[ram3]; 
        let ram4 = Math.floor(((Math.random())*10000)%9);
        const s4 = data.Friedfood[ram4]; 
          let ram51 = Math.floor(((Math.random())*10000)%20);
          const s51 = data2.mainmeal[ram51];
          let ram61 = Math.floor(((Math.random())*10000)%20);
          let ram62 = Math.floor(((Math.random())*10000)%3);
          let ram63 = Math.floor(((Math.random())*10000)%4);
          const s61 = data2.mainmeal[ram61]; 
          const s62 =data2.Comeswithmeal[ram62];
          const s63 = data2.drinks[ram63];
        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('example_menu')
            .setPlaceholder('請選擇一個選項')
            .addOptions(
                {
                    label: '飯食',
                    description: '隨機選擇飯食類食物',
                    value: `${s1.name.toString()}`,
                },
                {
                    label: '麵食',
                    description: '隨機選擇麵食類食物',
                    value: `${s2.name.toString()}`,
                },
                {
                  label: '鍋燒',
                  description: '隨機選擇鍋燒類食物',
                  value: `${s3.name.toString()}`,
              },
              {
                label: '炸物',
                description: '隨機選擇炸物類食物',
                value: `${s4.name.toString()}`,
               },
               {
                 label: '老麥(單點)',
                 description: '隨機選擇單點的主食',
                 value: `${s51.name.toString()}`,
                },
                {
                    label: '老麥(套餐)',
                    description: '隨機選擇套餐',
                    value: `${s61.name.toString()} + ${s62.name.toString()} + ${s63.name.toString()}`,
                }
            );

        const row = new ActionRowBuilder().addComponents(selectMenu);

        await interaction.reply({
            content: '請選擇一個選項：',
            components: [row],
            ephemeral: true, 
            
        });

}
},)  

client.on('interactionCreate', (interaction) => {
  if (!interaction.isStringSelectMenu()) return;

  if (interaction.customId === 'example_menu') {
    const selected = interaction.values[0]; 
    interaction.update({
      content: selected,
      components: [],
    });
  }
})
// Log in to Discord with your client's token
client.login(token);
