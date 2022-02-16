class Navbar {
  static showActivePlayer(game) {
    let text = document.getElementById("activePlayerText");
    if(game.player1Turn === true) {
      text.innerText = "Player 1's turn";
    } else {
      text.innerText = "Player 2's turn";
    }
  }

  static showWormImage(game) {
    let image = document.getElementById("activeWorm");
    if(game.player1Turn === true) {
      image.setAttribute("src", "./images/worm0.png");
    } else {
      image.setAttribute("src", "./images/worm1.png");
    }
  }
}

module.exports = Navbar;