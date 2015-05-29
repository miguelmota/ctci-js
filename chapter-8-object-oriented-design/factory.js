/**
 * Factory
 *
 * p105
 */

var CardGame = new (function() {
  this.GameTypes = {
    Poker: 1,
    BlackJack: 2
  };

  this.createCardGame = function(type) {
    if (type === this.GameTypes.Poker) {
      return new PokerGame();
    } else if (type === this.GameTypes.BlackJack) {
      return new BlackJackGame();
    }
  }.bind(this);
});

function PokerGame() {
  this.deal = function() {
    return 'dealing';
  };
}

function BlackJackGame() {

}

console.log(CardGame.createCardGame(CardGame.GameTypes.Poker).deal()); // 'dealing'
