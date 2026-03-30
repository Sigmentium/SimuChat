// 2026
// © Sigmentium

import { AddStyle } from './Style';
import './SimuChat.css';

export class SimuChat {
    private egoName: string;
    private companionName: string;

    constructor(egoName: string, companionName: string, style: string, typeStyle: string) {
        this.egoName = egoName;
        this.companionName = companionName;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './SimuChat.css';
        document.head.appendChild(link);

        const Main = document.getElementById('Main');

        if (Main) {
            Main.innerHTML = `
            <div class="chat-header">
                <span class="chat-title">${this.companionName}</span>
                <span class="chat-status">● в сети</span>
            </div>

            <div id="Chat" class="chat-messages"></div>

            <div id="Choices" class="message-choices"></div>`;
        }
        else {
            console.error('Отсутствует элемент Main для рендеринга');
        }

        AddStyle(style, typeStyle);
    }

    AddMessageCompanion(message: string): void {
        const Chat = document.getElementById('Chat');

        if (Chat) {
            Chat.innerHTML += `<br>
            <div class="message incoming">
                <div class="message-content">
                    <div class="message-text">${message}</div>
                    <div class="message-meta">
                        <span class="sender-name">${this.companionName}</span>
                        <span class="time">${GetCurrentTime()}</span>
                    </div>
                </div>
            </div>`;
        }
        else {
            console.error('Отсутствует элемент Main для рендеринга');
        }
    }

    AddMessageEgo(message: string): void {
        const Chat = document.getElementById('Chat');

        if (Chat) {
            Chat.innerHTML += `<br>
            <div class="message outgoing">
                <div class="message-content">
                    <div class="message-text">${message}</div>
                    <div class="message-meta">
                        <span class="sender-name">${this.egoName}</span>
                        <span class="time">${GetCurrentTime()}</span>
                    </div>
                </div>
            </div>`;
        }
        else {
            console.error('Отсутствует элемент Main для рендеринга');
        }
    }

    AddSampleAnswerEgo(...answers: string[]): void {
        const Choices = document.getElementById('Choices');

        if (Choices) {
            answers.forEach((answer) => {
                Choices.innerHTML += `<button class="choice-btn">${answer}</button>`;
            });

            document.querySelectorAll(".choice-btn").forEach((btn) => {
                btn.addEventListener("click", () => {
                    this.AddMessageEgo(btn.textContent);
                    btn.parentElement?.remove();
                });
            });
        }
        else {
            console.error('Отсутствует элемент Main для рендеринга');
        }
    }
}

function GetCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}