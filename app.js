document.addEventListener('DOMContentLoaded', () => {

    //card options
const cardArray = [
    {
        name: 'cat',
        img: 'https://www.flaticon.com/svg/static/icons/svg/616/616430.svg'
    },
    {
        name: 'cat',
        img: 'https://www.flaticon.com/svg/static/icons/svg/616/616430.svg'
    },
    {
        name: 'elephant',
        img: 'https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg'
    },
    {
        name: 'elephant',
        img: 'https://www.flaticon.com/svg/static/icons/svg/3069/3069224.svg'
    },
    {
        name: 'clownfish',
        img: 'https://www.flaticon.com/svg/static/icons/svg/875/875011.svg'
    },
    {
        name: 'clownfish',
        img: 'https://www.flaticon.com/svg/static/icons/svg/875/875011.svg'
    },
    {
        name: 'hounddog',
        img: 'https://www.flaticon.com/svg/static/icons/svg/2965/2965100.svg'
    },
    {
        name: 'hounddog',
        img: 'https://www.flaticon.com/svg/static/icons/svg/2965/2965100.svg'
    },
    {
        name: 'cow',
        img: 'https://www.flaticon.com/svg/static/icons/svg/2395/2395796.svg'
    },
    {
        name: 'cow',
        img: 'https://www.flaticon.com/svg/static/icons/svg/2395/2395796.svg'
    },
    {
        name: 'hen',
        img: 'https://www.flaticon.com/svg/static/icons/svg/1864/1864499.svg'
    },
    {
        name: 'hen',
        img: 'https://www.flaticon.com/svg/static/icons/svg/1864/1864499.svg'
    }

]
})

const grid = document.querySelector('.grid')

//create gameboard
function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/2913/2913456.svg')
        card.setAttribute('data-id', i)
        // card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}