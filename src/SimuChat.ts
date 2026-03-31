// 2026
// © Sigmentium

import { AddMessageCompanion } from './Companion';
import { AddMessageEgo, AddSampleAnswerEgo } from './Ego';
import { AddStyle } from './Style';
import { AnimTyping, StopAnimTyping } from './Animations';
import './SimuChat.css';

export type Chat = {
    text: string;
    type: "incoming" | "outgoing";
    time: string;
};

export class SimuChat {
    public messages: Chat[];
    private stepIndex = 0;
    private stepKey = "SimuChatStep";
    public lastChoice: string | null = null;
    public egoName: string;
    public companionName: string;

    private RenderMessages(): void {
        const Chat = document.getElementById('Chat');
        if (!Chat) {
            console.error('Отсутствует элемент Chat для рендеринга');
            return;
        }

        Chat.innerHTML = "";

        const Data = localStorage.getItem('Messages');
        if (!Data) return;

        this.messages = JSON.parse(Data);

        this.messages.forEach((msg) => {
            Chat.innerHTML += `
            <div class="message ${msg.type}">
                <div class="message-content">
                    <div class="message-text">${msg.text}</div>
                    <div class="message-meta">
                        <span class="sender-name">${msg.type === "incoming" ? this.companionName : this.egoName}</span>
                        <span class="time">${msg.time}</span>
                    </div>
                </div>
            </div>`;
        });

        setTimeout(() => this.ScrollToBottom(), 0);
    }

    public ScrollToBottom(): void {
        const Chat = document.getElementById('Chat');
        if (!Chat) return;

        Chat.scrollTop = Chat.scrollHeight;
    }

    public SaveMessages(): void {
        localStorage.setItem('Messages', JSON.stringify(this.messages));
    }

    private SaveStep(): void {
        localStorage.setItem(this.stepKey, String(this.stepIndex));
    }

    private LoadStep(): void {
        const Step = localStorage.getItem(this.stepKey);
        if (Step) this.stepIndex = Number(Step);
    }

    constructor(egoName: string, companionName: string, style: string, typeStyle: string) {
        this.messages = [];
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

        this.RenderMessages();
        this.LoadStep();
        setTimeout(() => this.ScrollToBottom(), 0);
    }

    async run(steps: (() => Promise<void> | void)[]) {
        for (let i = this.stepIndex; i < steps.length; i++) {
            await steps[i]();
            this.stepIndex++;
            this.SaveStep();
        }
    }

    AddMessageCompanion = AddMessageCompanion;
    AddMessageEgo = AddMessageEgo;
    AddSampleAnswerEgo = AddSampleAnswerEgo;

    AnimTyping = AnimTyping;
    StopAnimTyping = StopAnimTyping;

    Delay(duration: number) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }
}

export function GetCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}