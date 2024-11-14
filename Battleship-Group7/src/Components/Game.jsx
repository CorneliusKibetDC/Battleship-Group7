import React, { useState, useEffect } from "react";
import Board from "./Board.jsx";
import ShipPlacement from "./ShipPlacement.jsx";
import { initializeBoard, placeShipOnBoard, takeShot, checkShipPlacementValid, getRandomCoordinates } from "../utils/helpers.js";

function Game() {
  const [playerBoard, setPlayerBoard] = useState(initializeBoard());
  const [opponentBoard, setOpponentBoard] = useState(initializeBoard());
  const [turn, setTurn] = useState("player");
  const [phase, setPhase] = useState("placement");
  const [shipsToPlace, setShipsToPlace] = useState([5, 4, 3, 3, 2]); // Order of ships to place
  const [playerShips, setPlayerShips] = useState([]);
  const [opponentShips, setOpponentShips] = useState([]);
  const [gameOver, setGameOver] = useState(false);

// Handle placing ships on the player's board
const handlePlaceShip = (coordinates, length) => {
  if (shipsToPlace.includes(length)) {
    if (checkShipPlacementValid(playerBoard, coordinates, length)) {
      const updatedBoard = placeShipOnBoard(playerBoard, coordinates, length);
      setPlayerBoard(updatedBoard);
      setPlayerShips([...playerShips, { coordinates, length }]);
          // Remove the first occurrence of the placed ship size
  setShipsToPlace((prevShipsToPlace) => {
    const updatedShips = [...prevShipsToPlace];
    const index = updatedShips.indexOf(length);
    if (index > -1) {
      updatedShips.splice(index, 1);
    }
    return updatedShips;
  });

// After placing the two ships of size 3, move to size 2
if (shipsToPlace.filter((size) => size === 3).length === 0) {
if (shipsToPlace.includes(2)) {
  // Proceed to next ship size (size 2)
}
}

if (shipsToPlace.length === 1) {
  setPhase("gameplay");
  setOpponentShips(generateOpponentShips());
}
} else {
  alert("Invalid ship placement");
}
}
};


  // Generate random ships for the opponent
  const generateOpponentShips = () => {
    let ships = [];
    let tempBoard = initializeBoard();

    [5, 4, 3, 3, 2].forEach((length) => {
      const coords = getRandomCoordinates(tempBoard, length);
      tempBoard = placeShipOnBoard(tempBoard, coords, length);
      ships.push({ coordinates: coords, length });
    });

    setOpponentBoard(tempBoard);
    return ships;
  };

  // Handle shooting (player or opponent taking a turn)
  const handleTakeTurn = (x, y) => {
    if (phase === "gameplay" && !gameOver) {
      const targetBoard = turn === "player" ? opponentBoard : playerBoard;
      const updatedBoard = takeShot(targetBoard, x, y);
      let hit = false;

      if (turn === "player") {
        hit = checkHit(opponentShips, x, y);
        if (hit) console.log("Player hit an opponent ship!");
        setOpponentBoard(updatedBoard);
        setTurn("opponent");
      } else {
        hit = checkHit(playerShips, x, y);
        if (hit) console.log("Opponent hit your ship!");
        setPlayerBoard(updatedBoard);
        setTurn("player");
      }

      checkGameOver();
    }
  };

  // Check if the shot hit any ship
  const checkHit = (ships, x, y) => {
    return ships.some((ship) =>
      ship.coordinates.some(([sx, sy]) => sx === x && sy === y)
    );
  };

const [winner, setWinner] = useState(""); // New state for storing winner

// Check if the game is over
const checkGameOver = () => {
  const isPlayerShipsSunk = playerShips.every((ship) =>
    ship.coordinates.every(([x, y]) => playerBoard[x][y].hit)
  );
  const isOpponentShipsSunk = opponentShips.every((ship) =>
    ship.coordinates.every(([x, y]) => opponentBoard[x][y].hit)
  );

  if (isPlayerShipsSunk || isOpponentShipsSunk) {
    setGameOver(true);
    setWinner(isPlayerShipsSunk ? "Opponent Wins!" : "Player Wins!"); // Set winner instead of console logging
  }
};

  // Opponent randomly selects a target after the player's turn
  useEffect(() => {
    if (turn === "opponent" && !gameOver) {
      setTimeout(() => {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        handleTakeTurn(randomX, randomY);
      }, 2000);
    }
  }, [turn]);

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center"}}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h2 style={{color:"blue"}}>{turn === "player" ? "Your Turn       " : "Opponent's Turn       "}</h2>
      </div>
      {phase === "placement" ? (
        <ShipPlacement
          board={playerBoard}
          onPlaceShip={handlePlaceShip}
          currentShipSize={shipsToPlace[0]} // Pass current ship size to place
          shipsToPlace={shipsToPlace}
        />
      ) : (
       
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <div>
            <h2>Your Board</h2>
            <Board board={playerBoard} onCellClick={handleTakeTurn} isPlayer />
          </div>
          <div>
            <h2>Opponent's Board</h2>
            <Board board={opponentBoard} onCellClick={handleTakeTurn} />
          </div>
        </div>
      )}
    </div>


  <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
    {gameOver && (
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "20px",
        fontSize: "2rem",
        textAlign: "center",
        borderRadius: "8px"
      }}>
        <h1>GAME OVER</h1>
        <p>{winner}</p>
      </div>
    )}
   
  </div>


    </>
  );
}

export default Game;