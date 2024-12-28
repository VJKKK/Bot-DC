const { REST, Routes } = require('discord.js');
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  /*{
    name:'你想吃什麼',
    description: '隨機抽取你想要的食物類型',   
  },*/
  {
    name:'食物選單',
    description:'跟上面一樣',
  }
];

const rest = new REST({ version: '10' }).setToken('////////////////////////////Bot Token///////////////////////////////////');
                                                   
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands("your user id","server id"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

