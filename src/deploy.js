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

const rest = new REST({ version: '10' }).setToken('MTMwMzE3NDA1OTM2OTk1NTMyOA.GE0mkX.iUR505I04TSjf_gu4frXo5vq0wIEkwZRO_LRDY');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands("1303174059369955328","1317884732444377193"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
/*1230132985349799947*/