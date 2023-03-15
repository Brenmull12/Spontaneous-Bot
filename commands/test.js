const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('This is a test command. It will reply to your message!'),
	async execute(interaction) {
		await interaction.reply('Test Received!');
	},
};
