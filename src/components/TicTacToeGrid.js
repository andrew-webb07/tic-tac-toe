import React, { useState } from "react";
import "./TicTacToe.css"

export const TicTacToeGrid = () => {
    let winnerArray = []

    const calculateWinner = (squares) => {
        // All possible winning square combinations
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];

        // if current square combination of O's or X's equal to each of the numbers in a given line
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winnerArray = [a, b, c]
            return squares[a];
          }
        }

        // if no match, return null and continue game
        return null;
      }

    // create array of 9 items initially with null values
    const [choicesArray, setChoicesArray] = useState(Array(9).fill(null))
    // const [winnerArray, setWinnerArray] = useState([])
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(choicesArray)
    const xO = xIsNext ? "X" : "O";
    let counter = 0
    console.log(winnerArray)

    const handleClick = (i) => {
        // create a copy of current choices Array
        const squares = [...choicesArray]

        // return if there is a winner or return X or O for current selected square
        if (winner || squares[i]) return;

        // put X or O into squares array at correct square
        squares[i] = xO;
        setChoicesArray(squares)

        // Alternates true and false for whether square should have X or O
        setXisNext(!xIsNext);
      };

      for (const choice of choicesArray) {
        if (choice === "X" || choice === "O") {
          counter++
        }
      }

    console.log(choicesArray)
    return (
        <>
            <div className="board">
                {choicesArray.map((square, i) => (
                  <>
                  {winnerArray.length !== 0 && winnerArray.includes(i) ? <button className='winnnerSquares' onClick={() => handleClick(i)}>{square}</button> : <button className='squares' onClick={() => handleClick(i)}>{square}</button>}
                  </>
                  ))}
            </div>
            {winner ? <><h1>Winner is {winner}!!!!</h1> <div className="restartButtonWrapper"><button onClick={() => window.location.reload(false)} className="restartButton">Play Again??</button></div></> : counter === 9 ? <><h1>Cats game!</h1><div className="restartButtonWrapper"><button onClick={() => window.location.reload(false)} className="restartButton">Play Again??</button></div> </>: <h1>Next Player: {xO}</h1>}
        </>
    )
}