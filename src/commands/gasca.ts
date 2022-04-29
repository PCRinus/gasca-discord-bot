import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "../interfaces/ICommand";

export const gasca: ICommand = {
  data: new SlashCommandBuilder()
    .setName("gasca")
    .setDescription("The tagged user is a gâscă")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user which is a gâscă")
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    console.log(interaction);
    // const gascaUser = interaction.options.getMentionable()
  },
};
