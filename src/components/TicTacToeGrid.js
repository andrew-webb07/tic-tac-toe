import React from "react"
import"./TicTacToe.css"

export const TicTacToeGrid = () => {


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