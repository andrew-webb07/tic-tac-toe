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

    // create array of 9 items with all null values
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        // Alternates true and false for x is next or not, o is next
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
        <Board squares={history[stepNumber]} onClick={handleClick} />

        </>
    )
}