console.log("cards.js is loaded");

// One card creation
/*var card = {
    name : 'A',
    suite : 'Spade',
}

console.log( card.suite +" "+ card.name);
*/

// multiple cards
var deck = {
    names :['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suites : ['Hearts','Diamonds','Spades','Clubs'],
}
 
var i=0 ;
while (i < deck.suites.length) {

    var j=0;     
    while (j < deck.names.length) {
        console.log(deck.suites[i], deck.names[j])
        j++;
    }

    i++;
}