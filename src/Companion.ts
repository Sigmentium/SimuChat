import { GetCurrentTime } from "./SimuChat";
import type { SimuChat, Chat } from "./SimuChat";

export function AddMessageCompanion(this: SimuChat, message: string): void {
    const Chat = document.getElementById('Chat');

    const msg: Chat = {
        text: message,
        type: "incoming",
        time: GetCurrentTime()
    };

    this.messages.push(msg);
    this.SaveMessages();

    if (Chat) {
        Chat.innerHTML += `
        <div class="message incoming">
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-meta">
                    <span class="sender-name">${this.companionName}</span>
                    <span class="time">${msg.time}</span>
                </div>
            </div>
        </div>`;

        setTimeout(() => this.ScrollToBottom(), 0);
    }
    else {
        console.error('Отсутствует элемент Chat для рендеринга');
    }
}