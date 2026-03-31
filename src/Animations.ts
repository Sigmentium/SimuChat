import type { SimuChat } from "./SimuChat";

export function AnimTyping(this: SimuChat): void {
    StopAnimTyping();

    const Chat = document.getElementById('Chat');

    if (Chat) {
        Chat.innerHTML += `
        <div class="typing" id="Typing">
            ${this.companionName}<span class="dots"></span>
        </div>
        `;

        setTimeout(() => this.ScrollToBottom(), 0);
    }
    else {
        console.error('Отсутствует элемент Chat для рендеринга');
    }
}

export function StopAnimTyping(): void {
    document.getElementById("Typing")?.remove();
}