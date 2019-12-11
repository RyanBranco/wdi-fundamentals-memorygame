let cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
}, 
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}];

let cardsInPlay = [];

function createBoard() {
    for (i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    };
};

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
    checkForMatch();
};

function checkForMatch() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        alert("You found a match!");
    } else {
        alert("sorry try again");
    };
};
createBoard();