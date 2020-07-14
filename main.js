const cardBoard = document.querySelector("#cardboard");
const images = [
    /**'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'**/
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
]

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
        <div class="memory-card" data-card="${img}">
            <img class="front-face" src="dark img/${img}">
            <img class="back-face" src="dark img/capa2.png">
        </div>
    `;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Final do HTML */

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockCards = false;


function flipCard(){
    if(lockCards) return false;
    this.classList.add('flip')

    if(!firstCard){
       firstCard = this;

       return false;
    }

    secondCard = this;
    checkForMatch (this);
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? disableCards() : resetCards(isMatch);
}

function disableCards(){
    lockCards = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
    },  1000);
}

(function shuffle(){
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    })
})()

function resetCards(isMatch = false){
    if(isMatch){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
        
    [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener('click',flipCard))