const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();
const Navbar = require('../public/views/navbar')

let gameMock = {
  player1Turn: true,
  getActiveWorm: () => {
    return {
      currentWeapon: {
        name: "Tomato"
      }
    }
  },
  timer: {
    timeLeftOnTurn: () => {
      return 10;
    }
  },
  moveLimit: 5,
  moveCount: 2
}

describe('index.html', () => {
  beforeEach((done) => {
   JSDOM.fromFile(`${__dirname}/../public/index.html`)
   .then((dom) => {
     global.document = dom.window.document;
   })
 .then(done, done);
 });

 it("should be able to show the current player's turn", () => {
  let text = document.getElementById("activePlayerText");
  Navbar.showActivePlayer(gameMock);  
  expect(text.innerText).to.eq("Player 1's turn")
 });

 it("can change the worm's image", () => {
  let image = document.getElementById("activeWorm");
  Navbar.showWormImage(gameMock);
  expect(image.src.slice(-9)).to.eq("worm0.png");
 });

 it("can change the active weapon image", () => {
  let image = document.getElementById("activeWeapon");
  Navbar.showWeaponImage(gameMock);
  expect(image.src.slice(-10)).to.eq("tomato.png");
 });

 it("can show the timer", () => {
  let text = document.getElementById("timeLeft");
  Navbar.showTimer(gameMock);
  expect(text.innerText).to.eq(10);
 });

 it("can show the number of moves left", () => {
  let text = document.getElementById("movesLeft");
  Navbar.showMove(gameMock);
  expect(text.innerText).to.eq(3);
 });

 it("can show everything that the navbar needs to show in one fell swoop", () => {
  Navbar.show(gameMock);
  let text = document.getElementById("activePlayerText");
  let image = document.getElementById("activeWorm");
  let weaponImage = document.getElementById("activeWeapon");
  let timeText = document.getElementById("timeLeft");
  let moveText = document.getElementById("movesLeft");
  expect(text.innerText).to.eq("Player 1's turn");
  expect(image.src.slice(-9)).to.eq("worm0.png");
  expect(weaponImage.src.slice(-10)).to.eq("tomato.png");
  expect(timeText.innerText).to.eq(10);
  expect(moveText.innerText).to.eq(3);
 })
})
