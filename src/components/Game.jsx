import React from 'react';
import { useState } from 'react';
import { CalculateWinner } from '../helper';
import Board from './Board';
import './Game.css'
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const winner = CalculateWinner(board)

const handleClick = (index) => {
    const  boardCopy = [...board]

    if(winner || boardCopy[index]) return
    boardCopy[index] = xIsNext ? 'X' : '0' 
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
}

const startNewgame=()=>{
    return(
        <button className='start__btn' onClick={()=>setBoard(Array(9).fill(null))} > Cleane none </button>
    )
}

    return (
        <div className='wrapper'>
            {startNewgame()}
            <Board squares={board} click={handleClick} />
            <p className='game__info'>
                { winner ? "Победитеь: " + winner : "Сейчас ходит: " + (xIsNext ? " X" :  " 0") }
            </p>
        </div>
    );
}

export default Game;
