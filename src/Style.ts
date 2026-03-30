export function AddStyle(style: string, typeStyle: string): void {
    const Main = document.getElementById('Main');

    switch (style) {
        case 'default':
            break;
        case 'telegram':
            switch (typeStyle) {
                case 'Forest':
                    if (Main) {
                        Main.style.backgroundImage = "url('https://github.com/SimuChat/Assets/blob/main/Telegram/Wallpapers/Forest.jpg?raw=true')";
                    }
                    else {
                        console.error('Отсутствует элемент Main для рендеринга');
                    }
                    break;
                case 'Lighthouse':
                    if (Main) {
                        Main.style.backgroundImage = "url('https://github.com/SimuChat/Assets/blob/main/Telegram/Wallpapers/Lighthouse.jpg?raw=true')";
                    }
                    else {
                        console.error('Отсутствует элемент Main для рендеринга');
                    }
                    break;
                case 'Paris':
                    if (Main) {
                        Main.style.backgroundImage = "url('https://github.com/SimuChat/Assets/blob/main/Telegram/Wallpapers/Paris.jpg?raw=true')";
                    }
                    else {
                        console.error('Отсутствует элемент Main для рендеринга');
                    }
                    break;
                case 'Space':
                    if (Main) {
                        Main.style.backgroundImage = "url('https://github.com/SimuChat/Assets/blob/main/Telegram/Wallpapers/Space.jpg?raw=true')";
                    }
                    else {
                        console.error('Отсутствует элемент Main для рендеринга');
                    }
                    break;
                default:
                    console.error(`Стиль ${typeStyle} в Telegram не существует`);
            }
            break;
        case 'WhatsApp':
            break;
        default:
            console.error(`Стиль ${style} не существует`);
    }
}