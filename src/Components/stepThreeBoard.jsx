import React, { useState, useEffect } from 'react';
// import './BattleshipBoardThree.css';

const BattleshipBoardThree = () => {
  const gridSize = 10;
  const [grid, setGrid] = useState(Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)));

  // Ship Placement Logic (2 ships only)
  useEffect(() => {
    const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

    // Ship 1: 4-cell ship - Horizontal at (A1, B1, C1, D1)
    newGrid[0][0] = 1;
    newGrid[0][1] = 1;
    newGrid[0][2] = 1;
    newGrid[0][3] = 1;

    // Ship 2: 3-cell ship - Vertical at (G1, G2, G3)
    newGrid[6][0] = 1;
    newGrid[7][0] = 1;
    newGrid[8][0] = 1;

    // Both ships are sunk, so we mark them all as hits
    const newGridWithHits = generateHitsOnShips(newGrid);

    // Generate misses randomly on the grid (cells that are not part of ships)
    const newGridWithMisses = generateRandomMisses(newGridWithHits);

    setGrid(newGridWithMisses);
  }, []);

  // Function to generate hits on all ship cells (since both ships are sunk)
  const generateHitsOnShips = (grid) => {
    const newGrid = grid.map(row => row.slice()); // Create a copy of the grid to mutate

    // We don't need to do anything special for hits since all ship cells will be 'H'
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (newGrid[row][col] === 1) {
          newGrid[row][col] = 'H'; // Mark as hit
        }
      }
    }

    return newGrid;
  };

  // Function to generate random misses (empty cells marked as 'M')
  const generateRandomMisses = (grid) => {
    const newGrid = grid.map(row => row.slice()); // Create a copy of the grid to mutate
    const totalCells = gridSize * gridSize;

    // Generate misses on non-ship cells (cells not marked as `H` or `1`)
    for (let i = 0; i < totalCells * 0.3; i++) { // Place about 30% of the cells as misses
      let row, col;
      do {
        row = Math.floor(Math.random() * gridSize);
        col = Math.floor(Math.random() * gridSize);
      } while (newGrid[row][col] === 'H' || newGrid[row][col] === 1); // Avoid overwriting ships or hits
      newGrid[row][col] = 'M'; // Mark as miss
    }

    return newGrid;
  };

  // Column labels (A-J)
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  // Row labels (1-10)
  const rows = Array.from({ length: gridSize }, (_, i) => i + 1);

  return (
    <div className="battleship-board">
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty corner cell */}
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th>{row}</th> {/* Row number */}
              {columns.map((col, colIndex) => {
                const cell = grid[row - 1][colIndex];
                const isHit = cell === 'H';
                const isMiss = cell === 'M';

                return (
                  <td
                    key={colIndex}
                    className={`grid-cell 
                      ${isHit ? 'hit' : ''} 
                      ${isMiss ? 'miss' : ''}`}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BattleshipBoardThree;
