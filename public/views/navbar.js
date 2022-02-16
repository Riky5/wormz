class Navbar {
  static showActivePlayer(game) {
    let text = document.getElementById("activePlayerText");
    if(game.player1Turn === true) {
      text.innerText = "Player 1's turn";
    } else {
      text.innerText = "Player 2's turn";
    }
  }
}

module.exports = Navbar;