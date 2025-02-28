const formQuote = document.querySelector('#formQuote');
const text = document.querySelector('#enterTheQuote');
const author = document.querySelector('#author');
const quoteList = document.querySelector('#quote-list')

formQuote.addEventListener('submit', (e) => {
    e.preventDefault();

    const textValue = text.value;
    const authorValue = author.value
    console.log(textValue, authorValue)
})

function addQuote(quote, author) {
    const quoteElement = document.createElement("p")
    quoteElement.classList.add("text")
    quoteElement.innerText = `Citation: ${quote}`

    const authorElement = document.createElement("p")
    authorElement.classList.add("author")
    authorElement.innerText = `Auteur(rice): ${author}`

    const quoteContainerElement = document.createElement("div")
    quoteContainerElement.classList.add("quote")
    quoteContainerElement.appendChild(quoteElement)
    quoteContainerElement.appendChild(authorElement)

    quoteList.appendChild(quoteContainerElement)
}