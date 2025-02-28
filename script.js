const formQuote = document.querySelector('#formQuote');
const text = document.getElementById('enterTheQuote');
const author = document.querySelector('#author');

formQuote.addEventListener('submit', (e) => {
    e.preventDefault();

    const textValue = text.value;
    const authorValue = author.value
    console.log(textValue, authorValue)
})