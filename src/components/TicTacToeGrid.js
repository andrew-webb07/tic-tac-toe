import React from "react";
import {Square} from "./Square.js";

export const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export const TicTacToeGrid = () => {
    // const [currentPlayer, setCurrentPlayer] = {

    // }
    const [ x , setX ] = ""
    const setBox = (boxId) => {
        
    }
    const playerOne = {
        id: 1,
        currentPlayer: false,
        character: "X"
    }
    const playerTwo = {
        id: 2,
        currentPlayer: false,
        character: "O"
    }


    return (
        <>
            <div className="gridContainer">
                <div className="rowContainer">
                    <div className="row" id="rowOne"></div>
                    <div className="row" id="rowTwo"></div>
                    <div className="row" id="rowThree"></div>
                </div>
                <div className="rowContainer">
                    <div className="row" id="rowFour"></div>
                    <div className="row" id="rowFive"></div>
                    <div className="row" id="rowSix"></div>
                </div>
                <div className="rowContainer">
                    <div className="row" id="rowSeven"></div>
                    <div className="row" id="rowEight"></div>
                    <div className="row" id="rowNine"></div>
                </div>
            </div>
        </>
    )
}