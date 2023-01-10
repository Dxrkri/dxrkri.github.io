var cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
var message = document.getElementById("message");
var game = document.getElementById("game");
var cardHTML = "";
var flippedCards = [];
var flipped = false;

// shuffle cards
cards = shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  cardHTML += `<div class="card" data-name="${cards[i]}"></div>`;
}
game.innerHTML = cardHTML;
var cardsElem = document.querySelectorAll(".card");
cardsElem.forEach(card => {
    card.addEventListener("click", flipCard);
});

function flipCard(e) {
