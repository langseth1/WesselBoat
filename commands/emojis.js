module.exports.run = async (client, message) => {
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: "Emoji Page 📑",
        icon_url: client.user.avatarURL
      },
      title: "Emojis 😜",
      description: "A list of unicode emojis.",
      fields: [{
          name: "Smileys, Handsigns, People and Clothing 😀👌",
          value: "[Smileys & People](https://furyingfox.github.io/emoji-face.html)"
        },
        {
          name: "Animals & Nature 🐶🌴",
          value: "[Animals & Nature](https://furyingfox.github.io/emoji-animals.html)"
        },
        {
          name: "Food & Drinks 🍏🥤",
          value: "[Food & Drinks](https://furyingfox.github.io/emoji-food.html)"
        },
        {
          name: "Activity & Sports ⚽️🏄‍",
          value: "[Activity & Sports](https://furyingfox.github.io/emoji-activity.html)"
        },
        {
          name: "Travel & Places ✈️🏡",
          value: "[Travel & Places](https://furyingfox.github.io/emoji-travel.html)"
        },
        {
          name: "Objects 📱🔮",
          value: "[Objects](https://furyingfox.github.io/emoji-objects.html)"
        },
        {
          name: "Symbols ☯️✅",
          value: "[Symbols](https://furyingfox.github.io/emoji-symbols.html)"
        },
        {
          name: "Flags 🇳🇴🇳🇱",
          value: "[Flags](https://furyingfox.github.io/emoji-flags.html)"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      }
    }
  });
}

module.exports.config = {
    name: "Help",
    aliases: ["help", "helppage"]
  
}