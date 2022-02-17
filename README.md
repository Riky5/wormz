<img src="https://github.com/Riky5/wormz/blob/readme/public/images/WormsLogoText.png?raw=true" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="250" height="60" />

## Created By

[Alfonso Ghislieri](https://github.com/AlfonsoGhislieri) |
[Chris Clement](https://github.com/chris-clement) |
[Chris Thomas](https://github.com/Hereloss) |
[Giorgi Gutsaevi](https://github.com/giorgigutsaevi) |
[Kim Morgan](https://github.com/kim-morgan) |
[Riky Moroni](https://github.com/Riky5)


## About the Project

This is our 2D game made for our final project at Makers.

Created from start to finish in 2 weeks using [JavaScript](https://www.javascript.com/), [p5](https://p5js.org/), [Matter.js](https://brm.io/matter-js/), [Express](https://expressjs.com/), [Node](https://nodejs.org/en/about/), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). 

[p5](https://p5js.org/) is a JavaScript library with a focus on creative coding. This allowed us to display our game, have music and render images in a flexible manner. 

[Matter.js](https://brm.io/matter-js/) is a JavaScript physics engine library that allowed our worms, bullets and terrain to have physical bodies with mass, velocity, collisions, friction and gravity. This gave our worms life rather than just being images on a screen.

## Playing the Game

https://wormz.herokuapp.com

# Getting Started

## Prerequisites

- [node](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)

```
npm install -g npm
```

## Installation

1. Make sure preqrequisites are installed
2. Clone the repo
```
git clone https://github.com/Riky5/wormz.git
```
3. cd into the directory
```
cd wormz
````
4. Install NPM packages
```
npm install
````
5. Run the bundler
```
npm run build
````
6. Run the server
```
npm start
````
7. Visit the locally hosted website
```
http://localhost:3000/
````
## What you should see

![homePage](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/homePage.jpeg?raw=true)

## Testing

Tests use [chai](https://www.chaijs.com/) 🫖 and [mocha](https://mochajs.org/) ☕️

```
npm test
```

# Usage

## Option Page

Click ***ON*** or ***OFF*** to start or stop background music and sound effects. 🔈 🔇

![optionScreen](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/optionScreen.png?raw=true)

## Instruction Page

This is an overview of how to play the game. 

![instructionPage](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/instructionPage.png?raw=true)

# Playing the Game

## Nav Bar

This displays the following: 

- Which Player's turn it is.

- Active weapon with relevant image shown.

- Weapon choices. To be selected using keypad.

- Time left on a Player's turn. 

- Moves left on a Player's turn.

![navBar](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/navBar.png?raw=true)

## Gameplay

Move using Left or Right arrow keys, jump using Up. 🕹

Aim using the mouse, click to shoot! 💥

Details are in the instructions page.

<!-- gif of worm moving and jumping -->

## Winning or Losing a game

A Player wins when the other Player dies.

A Player dies when their HP goes to 0. 

This can be from getting hit by enough bullets or falling in the lava. 🔥

![WormHit](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/worm-hit.gif?raw=true)

![WormInLava](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/fallInLava.gif?raw=true)

# Acknowledgements

Sounds thanks to [101 Soundboards](https://www.101soundboards.com/), [ZapSplat](https://www.zapsplat.com/) and [SoundImage](https://soundimage.org/) 🎶🎵

Thanks and hope you enjoy the game! 🪱