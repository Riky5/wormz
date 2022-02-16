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

  static showWeaponImage(game) {
    let weapons = {
      "Tomato": "./images/tomato.png",
      "TennisBall": "./images/tennis_ball.png",
      "Grenade": "./images/grenade.png"
    }
    let image = document.getElementById("activeWeapon");
    let weaponType = game.getActiveWorm().currentWeapon.name;
    image.setAttribute("src", weapons[weaponType]);
  }

  static showTimer(game) {
    let timer = document.getElementById("timeLeft");
    timer.innerText = game.timer.timeLeftOnTurn();
    if (game.timer.timeLeftOnTurn() <= 5) { 
      timer.classList.remove("blackText");
      timer.classList.add("redText");
     } else {
       timer.classList.remove("redText");
      timer.classList.add("blackText");
     }
  }
}

module.exports = Navbar;