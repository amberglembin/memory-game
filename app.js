document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'elephant',
            img: 'images/elephant.png'
        },
        {
            name: 'elephant',
            img: 'images/elephant.png'
        },
        {
            name: 'clownfish',
            img: 'images/clown-fish.png'
        },
        {
            name: 'clownfish',
            img: 'images/clown-fish.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'hen',
            img: 'images/hen.png'
        },
        {
            name: 'hen',
            img: 'images/hen.png'
        },
        {
            name: 'owl',
            img: 'images/owl.png'
        },
        {
            name: 'owl',
            img: 'images/owl.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create gameboard
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/forestOutline.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}


//check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/forestColor.png')
        cards[optionTwoId].setAttribute('src', 'images/forestColor.png')
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'images/forestOutline.png')
        cards[optionTwoId].setAttribute('src', 'images/forestOutline.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    } 
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}


createBoard()


})