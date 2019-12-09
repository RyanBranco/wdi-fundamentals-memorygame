let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("sorry try again")
    };
};

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);
    checkForMatch();
};