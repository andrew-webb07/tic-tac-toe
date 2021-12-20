import React, { useState } from "react";
import {Square} from "./Square.js";
import "./TicTacToe.css"

export const TicTacToeGrid = () => {

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
            return squares[a];
          }
        }
        // if no match, return null and continue game
        return null;
      }

    // create array of 9 items initially with null values
    const [choicesArray, setChoicesArray] = useState(Array(9).fill(null))

    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(choicesArray)
    const xO = xIsNext ? "X" : "O";

    

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

    const Board = ({ squares, onClick }) => (
        <div className="board">
          {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
          ))}
        </div>
      );  

    return (
        <>
        <Board squares={choicesArray} onClick={handleClick} />

        {winner ? <><h1>Winner is {winner}!!!!</h1> <button>play again</button></> : <h1>Next Player: {xO}</h1>}
        </>
    )
}