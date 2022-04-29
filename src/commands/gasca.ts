import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed, User } from "discord.js";
import { ICommand } from "../interfaces/ICommand";

export const gasca: ICommand = {
  data: new SlashCommandBuilder()
    .setName("gasca")
    .setDescription("The tagged user is a gâscă")
    .addMentionableOption((option) =>
      option.setName("user").setDescription("The user which is a gâscă")
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    //TODO: assign a User object to get schema validation and remove ts-ignore checks.
    const gascaUser = interaction.options.getMentionable("user");

    //@ts-ignore
    gascaUser.send("Tata, ești o gâscă!");

    console.log("Gasca", gascaUser);

    const gascaEmbed = new MessageEmbed();
    gascaEmbed
      .setTitle("Tata, ești o gâscă!")
      .setAuthor({
        //@ts-ignore
        name: gascaUser.user.tag,
        //@ts-ignore
        iconURL: gascaUser.user.displayAvatarURL(),
      })
      .addField("Cu drag: ", user.tag);

    await interaction.editReply({ embeds: [gascaEmbed] });
  },
};
