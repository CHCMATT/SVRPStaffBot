const Discord = require('discord.js');

module.exports = {
	name: 'addhex',
	description: 'Adds a hex to the Watched Players database.',
	permission: [
		{
			id: '757632405371879655', // Management
			type: 'ROLE',
			permission: true,
		},
		{
			id: '757632408484053102', // Administration
			type: 'ROLE',
			permission: true,
		},
		{
			id: '768477098318102568', // Lead Moderator
			type: 'ROLE',
			permission: true,
		},
		{
			id: '757627529103409283', // @everyone in Crew Discord
			type: 'ROLE',
			permission: false,
		},
		{
			id: '888206953917075498', // @everyone in Law Discord
			type: 'ROLE',
			permission: false,
		},
	],
	options: [
		{
			name: 'hex',
			description: 'Steam Hex ID',
			type: 'STRING',
			required: true,
		},
	],
	async execute(interaction) {
		const hex = interaction.options.getString('hex');
		const btns = confirmDenyBtns();
		await interaction.reply({ content: `Are you sure you want to add Steam Hex \`${hex}\` to the database?`, components: [btns] });
	},
};

function confirmDenyBtns() {
	const row = new Discord.MessageActionRow()
		.addComponents(
			new Discord.MessageButton()
				.setCustomId('confirmAdd')
				.setLabel('Confirm')
				.setStyle('SUCCESS'),
			new Discord.MessageButton()
				.setCustomId('cancelAdd')
				.setLabel('Cancel')
				.setStyle('DANGER'),
		);
	return row;
}