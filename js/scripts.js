var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
var ranks = ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
var deck = [];


$(function() {
  suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        // console.log(rank);
        deck.push(rank + ' of ' + suit);
      });
      // console.log(deck);
  });

  deck.forEach(function(card) {
    $('ul').append('<li>' + card + '</li>')
  });
});
