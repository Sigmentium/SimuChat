# SimuChat

**SimuChat** is a lightweight TypeScript library for building interactive chat simulations and dialogue-driven experiences directly in the browser.

It provides a messenger-style UI with support for dynamic conversations, user choices, typing animations, and persistent state — making it ideal for games, storytelling, and interactive applications.

---

## Getting started

Include SimuChat via CDN:

`<script src="https://cdn.jsdelivr.net/npm/simuchat/dist/SimuChat.js"></script>`

---

## ✨ Features

- 💬 Messenger-style UI rendering
- 🧠 Step-based dialogue engine with async/await support
- ⌨️ Typing animations and realistic delays
- 🎯 Interactive user choices (button-based input)
- 💾 Built-in persistence using localStorage
- 🔄 Resume conversations after page reload
- 🎨 Customizable styles and wallpapers
- ⚡ Zero dependencies, fast and lightweight

---

## 🎮 Use Cases

- Interactive story games  
- Visual novel-style experiences  
- Dialogue systems  
- Chat simulations  
- Web mini-games (e.g. Yandex Games)

---

## 🧩 Example

```JavaScript
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="https://cdn.jsdelivr.net/npm/simuchat/dist/SimuChat.js"></script>
    </head>
    <body>
        <div id="Main"></div>
        <script>
            const Chat = new SimuChat("You", "Anna", "telegram", "Forest");

            Chat.run([
                () => Chat.AddMessageCompanion("Hello!"), // Displaying the interlocutor's message
                () => Chat.AnimTyping(), // Start of typing animation
                () => Chat.Delay(2000), // Add delay
                () => Chat.StopAnimTyping(), // Stop of typing animation
                () => Chat.AddMessageEgo("Hi!"), // Displaying the user's message
                () => Chat.AddMessageCompanion("How are you?"),

                async () => {
                    await Chat.AddSampleAnswerEgo("I am fine", "I feel bad"); // We give the user a choice of answers
                },
                () => Chat.Delay(1000),
                () => {
                    // Processing the user's response
                    if (Chat.lastChoice === "I am fine") {
                        Chat.AddMessageCompanion("Nice!");
                    }
                    else {
                        Chat.AddMessageCompanion("It's a pity");
                    }
                }
            ]);
        </script>
    </body>
</html>```