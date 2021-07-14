let quotes = ['To truly find yourself, you should play hide and seek alone', 'Error 404: Advice not found', 'Do or do not, there is no try', 'Avoid people who take fortune cookies seriously'];
let fortunes = ['You will reconnect with an old acquaintance', 'You will eat some food', 'An unexpected twist of fate lies ahead', 'Smooth sailing ahead', 'You will sleep tonight'];

let genButton = document.getElementById('gen');
let messageDisplay = document.getElementById('message');

genButton.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 4);
    let j = Math.floor(Math.random() * 5);
    messageDisplay.innerText = `${quotes[i]}. The cookie says: ${fortunes[j]}. Your lucky number is ${Math.floor(Math.random() * 100)}.`;
    document.querySelector('.button').disabled = false;
});