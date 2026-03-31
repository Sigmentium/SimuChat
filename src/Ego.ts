import { GetCurrentTime } from "./SimuChat";
import type { SimuChat, Chat } from "./SimuChat";

export function AddMessageEgo(this: SimuChat, message: string): void {
    const Chat = document.getElementById('Chat');

    const msg: Chat = {
        text: message,
        type: "outgoing",
        time: GetCurrentTime()
    };

    this.messages.push(msg);
    this.SaveMessages();

    if (Chat) {
        Chat.innerHTML += `
        <div class="message outgoing">
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-meta">
                    <span class="sender-name">${this.egoName}</span>
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

export function AddSampleAnswerEgo(this: SimuChat, ...answers: string[]): Promise<string> {
    return new Promise((resolve) => {
        const Choices = document.getElementById('Choices');
        
        if (Choices) {
            Choices.innerHTML = "";

            answers.forEach((answer) => {
                const btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.textContent = answer;

                btn.addEventListener("click", () => {
                    this.AddMessageEgo(answer);
                    Choices.innerHTML = "";
                    resolve(answer);
                });

                Choices.appendChild(btn);
            });
        }
        else {
            console.error('Отсутствует элемент Choices для рендеринга');
        }
    });
}