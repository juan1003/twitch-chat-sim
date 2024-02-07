export function generateMessage(messages: string[]) {
    let index = Math.floor(Math.random() * messages.length);

    return messages[index];
  }

export function randomColor(colors: string[]) {
    let index = Math.floor(Math.random() * colors.length);

    return colors[index];
  }