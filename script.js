const formQuote = document.querySelector('#formQuote');
const text = document.querySelector('#enterTheQuote');
const author = document.querySelector('#author');
const quoteList = document.querySelector('#quote-list')

let quoteCount = 0;

formQuote.addEventListener('submit', (e) => {
    e.preventDefault();

    const textValue = text.value;
    const authorValue = author.value

    addQuote(textValue, authorValue)
})

const addQuote = (quote, author) => {
    const count = document.getElementById('count')

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
    quoteCount++

    count.innerText = `${quoteCount} citations`
}