import React from 'react';

const BattleshipBoard = () => {
  const gridSize = 10;

  // Initialize the grid with null values
  const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

  // Manually place ships in the grid
  // Ship 1: 5-cell ship - Horizontal at (A1, B1, C1, D1, E1)
  grid[0][0] = 1; // A1
  grid[0][1] = 1; // B1
  grid[0][2] = 1; // C1
  grid[0][3] = 1; // D1
  grid[0][4] = 1; // E1

  // Ship 2: 4-cell ship - Vertical at (G1, G2, G3, G4)
  grid[6][0] = 1; // G1
  grid[7][0] = 1; // G2
  grid[8][0] = 1; // G3
  grid[9][0] = 1; // G4

  // Ship 3: 3-cell ship - Horizontal at (A5, B5, C5)
  grid[4][0] = 1; // A5
  grid[4][1] = 1; // B5
  grid[4][2] = 1; // C5

  // Ship 4: 3-cell ship - Vertical at (E8, F8, G8)
  grid[7][4] = 1; // E8
  grid[7][5] = 1; // F8
  grid[7][6] = 1; // G8

  // Ship 5: 3-cell ship - Horizontal at (I7, J7, K7)
  grid[6][8] = 1; // I7
  grid[6][9] = 1; // J7
  grid[6][10] = 1; // K7

  // Ship 6: 2-cell ship - Vertical at (J5, J6)
  grid[4][9] = 1; // J5
  grid[5][9] = 1; // J6

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
                const isShip = grid[row - 1][colIndex] === 1; // Check if there's a ship
                return (
                  <td
                    key={colIndex}
                    className={`grid-cell ${isShip ? 'ship' : ''}`}
                  >
                    {/* Optionally, you can render something like an icon or letter for ships */}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BattleshipBoard;
