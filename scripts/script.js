let quotes = ['To truly find yourself, you should play hide and seek alone', 'Error 404: Quote not found', 'Do or do not, there is no try', 'Avoid people who take fortune cookies seriously'];
let fortunes = ['You will reconnect with an old friend', 'You will pay for a meal', 'An unexpected twist of fate lies ahead', 'Smooth sailing ahead', 'You will fall asleep tonight'];

let generateMessage = () => {
    let i = Math.floor(Math.random() * 5);
    let j = Math.floor(Math.random() * 6);
    console.log(`${quotes[i]}. The cookie says: ${fortunes[j]}. Your lucky number is ${Math.floor(Math.random() * 100)}.`);
};

