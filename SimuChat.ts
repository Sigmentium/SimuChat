// 2026
// © Sigmentium

import { AddStyle } from './src/Style'

const Main = document.getElementById('Main');

class SimuChat {
    private egoName: string;

    constructor(egoName: string, style: string, typeStyle: string) {
        this.egoName = egoName;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './src/Client.css';
        document.head.appendChild(link);

        AddStyle(style, typeStyle);
    }

    AddMessageCompanion(message: string): void {
        if (Main) {
            Main.innerHTML += `
            <div class="message message--other">
                <div class="message__bubble">
                    ${message}
                </div>
                <div class="message__meta">
                    <span>${this.egoName}</span>
                    <span>•</span>
                    <span>${GetCurrentTime}</span>
                </div>
            </div>`;
        }
        else {
            console.error('Отсутствует элемент Main для рендеринга');
        }
    }

    AddSampleReplyEgo(...answers: string[]): void {}

    AddUserImage(path: string): void {}
}

function GetCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}