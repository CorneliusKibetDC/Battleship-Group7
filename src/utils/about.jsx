
import React from "react";
import "./about.css"; 

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Battleship Game Tutorial</h1>
    </header>
  );
}

// NavBar Component
function NavBar() {
  const handleClick = (section) => {
    console.log(`Navigating to: ${section}`);
    
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => handleClick("about")}>
          <h3>About</h3>
        </li>
        <li onClick={() => handleClick("guide")}>
          <h3>Step by Step Guide</h3>
        </li>
        <li onClick={() => handleClick("feel-the-game")}>
          <h3>A Feel of The Game</h3>
        </li>
      </ul>
    </nav>
  );
}

// About Component
function About() {
  return (
    <div className="about-container">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h2>About the Battleship Game</h2>
      </div>

      <p>
        Battleship is a classic two-player strategy game where players take turns guessing the location of the opponent's ships on a grid.
        The goal is to sink all the opponent's ships by hitting their positions. The game involves clever strategy, planning, and prediction.
      </p>

      <ul>
        <li>The aircraft carrier, five squares long.</li>
        <li>The battleship, four squares long.</li>
        <li>The cruiser, three squares long.</li>
        <li>The submarine, same as the cruiser, three squares long.</li>
        <li>The destroyer, two squares long.</li>
      </ul>

      <div className="about-images">
        <img
          src="https://content.api.news/v3/images/bin/169891f9ee572d1f80e0a6e7bad453bd"
          alt="Game Board Example"
        />
        <p>
          <em>Example of a typical Battleship game grid.</em>
        </p>
      </div>

      <h3>Game Rules & Instructions:</h3>
      <ul>
        <li>The game is played on a 10x10 grid.</li>
        <li>Each player has three ships, each of length 3.</li>
        <li>Each ship can be placed either horizontally or vertically on the grid.</li>
        <li>On each turn, you will click on a cell of the opponent's grid to make a guess.</li>
        <li>If you hit a ship, it will be marked as 'X'. If you miss, it will be marked as 'O'.</li>
        <li>The game ends when all of the opponent's ships are sunk.</li>
        <li>The player who sinks all the opponent's ships first wins the game!</li>
      </ul>
    </div>
  );
}

// App Component (Main component)
function StartPage() {
  return (
    <div >
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="about-container">
        <About />
      </div>
    </div>
  );
}

export default StartPage;
