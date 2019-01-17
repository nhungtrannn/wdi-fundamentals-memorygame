
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push("queen");

console.log("User flipped queen");

var cardTwo = cards[2];

cardsInPlay.push("king");

console.log("User flipped king");

if (length === 2){
	// How many items are in the cardsInPlay array.
} else if (cardsInPlay[0] === cardsInPlay [2]) {
	console.log("You found a match!")
	// Checks equality between the two cards in the cardsInPlay array. 
} else {
	console.log("Sorry, try again.")
	// Values are not equal.
}