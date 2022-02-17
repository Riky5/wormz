![wormsLogo](https://github.com/Riky5/wormz/blob/readme/public/images/WormsLogoText.png?raw=true=150x30)

## About the Project

This is our 2D game made for our final project at Makers.

Made in 2 weeks using JavaScript, p5 library, matter.js library, express, node, html, css. 

[p5]('https://p5js.org/') is a JavaScript library with a focus on creative coding. This allowed us to display our game, have music and render images in a flexible manner. 

[matter.js]('https://brm.io/matter-js/') is a JavaScript physics engine library that allowed our worms, bullets and terrain to have physical bodies with mass,velocity, collisions, friction and gravity. This gave our worms life rather than just being images on a screen.

## Playing the Game

https://wormz.herokuapp.com

# Getting Started

## Prerequisites

- [node]('https://nodejs.org/en/download/')
- npm

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

# Usage

## Option Page

Click ***on*** or ***off*** to start or stop background music and sound effects.

![optionScreen](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/optionScreen.png?raw=true)

## Instruction Page

This is an overview of how to play the game. 

![instructionPage](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/instructionPage.png?raw=true)

## Playing the Game

### Nav Bar

This displays the following: 

- Which Player's turn it is.

- Active weapon with relevant image shown.

- Weapon choices. To be selected using keypad.

- Time left on a Player's turn. 

- Moves left on a Player's turn.

![navBar](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/navBar.png?raw=true)

### Winning/Losing a game

A Player wins when the other Player dies.

A Player dies when their HP goes to 0. 

This can be from getting hit by bullets or falling in the lava.

![WormHit](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/worm-hit.gif?raw=true)

![WormInLava](https://github.com/Riky5/wormz/blob/readme/public/readMeGifs/fallInLava.gif?raw=true)




Testing
```
npm test
```