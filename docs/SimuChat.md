# SimuChat Documentation

---

## Installation

The library is available via CDN:

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/simuchat/dist/SimuChat.js"></script>
```

---

## Quick Start

```JavaScript
const Chat = new SimuChat("You", "Anna", "telegram", "Forest");

Chat.run([
    () => Chat.AddMessageCompanion("Hello!"), // Displaying the interlocutor's message
    () => Chat.AnimTyping(), // Start of typing animation
    () => Chat.Delay(2000), // Add delay
    () => Chat.StopAnimTyping(), // Stop of typing animation
    () => Chat.AddMessageEgo("Hi!"), // Displaying the user's message
    () => Chat.AddMessageCompanion("How are you?"),
    async () => await Chat.AddSampleAnswerEgo("I am fine", "I feel bad"), // We give the user a choice of answers
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
```

---

## Class: `SimuChat`

### Constructor

```JavaScript
new SimuChat(egoName, companionName, style, typeStyle)
```

#### Parameters:

| Parameter | Type | Description       |
|-----------|------|-------------------|
| `egoName`       | string | User name |
| `companionName` | string | Companion name |
| `style`         | string | UI style (`telegram`, `whatsapp`, `default`) |
| `typeStyle`     | string | Style variant |

---

## Core Methods

### `run(steps)`
Executes commands and called functions.

```JavaScript
Chat.run([
    () => ...,
    () => ...
]);
```

| Parameter | Type  | Description          |
|-----------|-------|----------------------|
| `steps`   | Array | Array with functions |

- Runs steps sequentially
- Saves progress to `localStorage`

---

### `AddMessageCompanion(message)`
Adds a message from the companion.

```JavaScript
Chat.AddMessageCompanion("Hello!");
```

| Parameter | Type   | Description            |
|-----------|--------|------------------------|
| `message` | string | Message from companion |

---

### `AddMessageEgo(message)`
Adds a message from the user.

```JavaScript
Chat.AddMessageEgo("Hi!");
```

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| `message` | string | Message from user |

---

### `AddSampleAnswerEgo(...answers)`
Creates selectable response buttons.

```JavaScript
async () => await Chat.AddSampleAnswerEgo("I am fine", "I feel bad")
```

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| `...answers` | string | Infinite number of arguments in the form of answer options |

---

### `AnimTyping()`
Displays a typing indicator.

```JavaScript
Chat.AnimTyping();
```

---

### `StopAnimTyping()`
Removes the typing indicator.

```JavaScript
Chat.StopAnimTyping();
```

---

### `Delay(duration)`

Adds a delay between messages.

```JavaScript
await Chat.Delay(1000);
```

| Parameter  | Type   | Description       |
|------------|--------|-------------------|
| `duration` | number | Delay time        |

---

## State Management

---

## Styling

Supported styles:

#### Telegram

```JavaScript
new SimuChat("You", "Bot", "telegram", "Forest");
```

Available themes:
- `Forest`
- `Lighthouse`
- `Paris`
- `Space`

---

## Recommendations

- Always include `<div id="Main"></div>` in your HTML
- Use `async/await` for scenario steps
- Avoid manually modifying `#Chat` contents