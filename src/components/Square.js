import React from "React"

export const Square = ({value, clickFunction}) => {
    return (
        <button onClick={clickFunction}>{value}</button>
    )
}