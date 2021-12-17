import React from 'react'

export const Square = ({value, clickFunction}) => {
    return (
        <button onClick={clickFunction}>{value}</button>
    )
}