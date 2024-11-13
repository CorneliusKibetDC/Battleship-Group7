import React, {useState} from "react";
import BattleshipBoard from "./stepOneBoard";
import BattleshipBoardTwo from "./stepTwoBoardTwo";
import BattleshipBoardThree from "./stepThreeBoard";


function Steps(){
   

function One(){
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div >
        <p>You and your opponent must place your 5 ships on the grid of your boxes. Do not look at what your opponent is doing, and make sure they can not see your ship configuration either. Follow these rules while placing your ships:</p>
      <ul>
        <li>Ships can be placed horizontally or vertically, but not diagonally, without overlapping each other</li>
        <li>You must place all five ships on the grid.</li>
        <li>Every ship must be completely on the grid. No ship can hang off the edge of the board.</li>
        <li>Once your ships are placed and the game has begun, you are not allowed to move your ships again.</li>
      </ul>
     {/*a button where when pressed it mounts the board */}
        <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>{/*when you click it changes the value to true */}
          {isVisible ? "Hide" : "Show"} Board {/*since its false it'll bring show */}
        </button>
        <p><i>(the cells in blue indicate the ship positions)</i></p>
        {isVisible && <BattleshipBoard />} {/* Conditionally render BattleshipBoard */}
      </div>
    );
}

function Two(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <p>After deciding on who should start, the one playing should call their shot to try and hit the opponent's ships. Clling a shot means that the player should pick a target hole on their upper grid and call out its coordinates(which can be named in terms of numbers and letters). To determine each coordinate, find its corresponding number on the left side of the grid and its letter on the top</p>
            <p>If the player calls out a shot location that is occupied by a ship,the shot qualifies as a hit! The opponent then says the ship that has been hit. The player records the hit by placing a red peg in the corresponding target hole in their target grid. The opponent too places a red peg in the corresponding hole of the ship the player has hit on their ocean grid</p>
            <p>However, if the player calls out a location not occupied by a ship on the opponent's ocean grid, it is considered a miss! The player records their miss by placing a white peg in the corresponding target hole on their target grid so as not to call it again. On the other hand, the opponent can choose not to mark the player's miss on their ocean grid</p>
            <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Board
            </button>
            <p><i>(the cells in the darker color indicate 'hits' while those that are lighter than the board indicate "misses')</i></p>
            {isVisible && <BattleshipBoardTwo />} {/* Conditionally render BattleshipBoard */}
        </div>
        
    )

}

function Three(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <p>To win a game, one player has to sink all the ships of the other player. Sinking a ship simply translates to all the coordinates of a ship's position being hit, in that all its holes are filled with red pegs. The owner of the ship should announce when a ship is sunk and what ship it was. The player should keep track of how many of their opponent's ship they have sunk by placing a red flag for each ship sunk at the top of the game</p>
            <button className="bnt-one" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Board
            </button>
            <p><i>(ships 1A to 1D and 7A to 9A have been sunk)</i></p>
            {isVisible && <BattleshipBoardThree />} {/* Conditionally render BattleshipBoard */}
        </div>
    )
}

    return(
        <div className="steps">
            <h1>Step By Step Guide</h1>
            <div className="one">
                <h3>Step one</h3>
                {One()}
            </div>
            <div className="two">
                <h3>Step Two</h3>
                {Two()}
            </div>
            <div className="three">
                <h3>Step Three</h3>
                {Three()}
            </div>
        </div>

    )
}


export default Steps