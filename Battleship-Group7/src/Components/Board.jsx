




import React from "react";
import Cell from "./Cell.jsx";

function Board({ board, onCellClick, isPlayer }) {
  return (
    <div className="board" style={{
        display: "grid",
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
        gridTemplateRows: `repeat(${board.length}, 1fr)`,
        gap: "1px",
        width: "400px",
        height: "400px",
        border: "1px solid black",
        backgroundColor: "lightgray",
        boxSizing: "border-box",
        padding: "10px",
  
    }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            x={rowIndex}
            y={colIndex}
            cell={cell}
            onClick={onCellClick}
            isPlayer={isPlayer}
          />
        ))
      )}
    </div>
  );
}

export default Board;