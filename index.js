// index.js
// Bot Discord squelette, aucune fonctionnalité pour l’instant.

const { Client, GatewayIntentBits } = require("discord.js");

// Client minimal
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// Événement déclenché quand le bot est connecté
client.once("ready", () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

// TODO: ajouter des fonctionnalités petit à petit ici

// Feature 3 : commande !help
function handleHelpCommand(message) {
  message.channel.send(
    [
      "Voici les commandes disponibles :",
      "`!ping` - Vérifie si le bot répond et affiche la latence.",
      "`!help` - Affiche ce message d’aide.",
      "`!userinfo` - Affiche des infos sur toi.",
    ].join("\n"),
  );
}

// Feature 3 : commande !userinfo
function handleUserInfoCommand(message) {
  const member = message.member;
  const user = message.author;

  const lines = [
    `👤 Pseudo : **${user.username}**`,
    `🆔 ID : \`${user.id}\``,
    member
      ? `📅 A rejoint le serveur : **${member.joinedAt.toLocaleDateString()}**`
      : "📅 Info de serveur non disponible.",
  ];

  message.channel.send(lines.join("\n"));
}

// ⚠️ Pour l’instant on met un token placeholder.
// Quand vous voudrez vraiment lancer le bot, remplacez par votre vrai token
// ou ajoutez un système .env dans un autre commit.
const TOKEN = "A_REMPLACER_PAR_UN_VRAI_TOKEN";

client.login(TOKEN);
