# Phase 2 Group Project: Battleship

### Authors : Shaline Chepkoech, Andrew Ambuka, Lisa Auta, Blessing Mwendwam, Ibrahim Hassan, Cornelius Kaptuwai November 14th 2024
****
## Project Overview
This project is a classic Battleship game recreated using React and JavaScript. The game is designed for two players: a user versus the computer. Each player takes turns guessing the location of the opponent's ships on a grid. The goal is to sink all of the opponent's ships before they sink yours.
********

## Features
Single-player mode: Play against an AI opponent.
Dynamic ship placement: Drag-and-drop functionality to place ships on your board.
Game logic: Proper validation of hits and misses, turn-based gameplay.
Score tracking: Keep track of scores for both the player and the AI.
Responsive design: Play the game on any device with a modern web browser.
User-friendly UI: Modern design using CSS, with intuitive interactions.

## Tech Stack
Frontend: React (JavaScript, JSX)
Styling: CSS (or SCSS)
State Management: React hooks (useState, useEffect)
Game Logic: JavaScript
Build Tools: Vite 

## SetUp Instruction
### Requirements
* [css](Framework URL)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)


### Getting Files
* Fork the repo
>  Clone repository
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install Dependencies:[npm install]
-Run the Backend Server: [npm run server]
* Open the folder location on terminal and use the following command to run app:[npm start]
- Make appropriate changes in file(s)
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request

## Project Structure
battleship-game/
│
├── public/              # Static files (index.html, icons, etc.)
├── src/
│   ├── assets/          # Images, sounds, and other assets
│   ├── components/      # Reusable React components (e.g., Grid, Ship, Board)
│   ├── hooks/           # Custom React hooks for game state management
│   ├── styles/          # CSS / SCSS files for styling components
│   ├── utils/           # Helper functions and game logic
│   ├── App.js           # Main App component
│   └── index.js         # Entry point for the React application
│
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation


### Gameplay Instructions
Placing Ships:

Before the game starts, place your ships on the grid.
Ships can be placed by dragging them onto the board.
You can rotate ships using the rotate button.
Taking Turns:

Once all ships are placed, the game begins.
Click on a cell in the enemy grid to make a guess.
A hit is marked when you guess a cell containing an enemy ship. A miss is marked otherwise.
Winning the Game:

The game ends when one player sinks all of the opponent's ships.
The winner is the player who sinks all ships first.

## Dependencies
- Google fonts
- Font awesome Icons
- Particles JS
*****
## Technologies Used
1. React
2. CSS
3. JavaScript
*****
## Contact Information
* Email : chepkoechshaline726@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 2024 shaline Chepkoech