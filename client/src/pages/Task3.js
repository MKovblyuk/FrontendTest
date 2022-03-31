import React from "react";
import data from "../task3Data.json"
import {Board} from "../components/Task_3/Board"
import "../css/boards.css"

const calculateButtleships = (board) => {
    let shipsCount = 0

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === "X"){
                // check the left and top cells
                // if they are "X" then we have already added this buttleship
                // so this is a continuation of the existing buttleship, otherwise it is a new ship
                if(i > 0 && board[i - 1][j] === "X") continue
                if(j > 0 && board[i][j - 1] === "X") continue
                shipsCount++
            }
        }
    }

    return shipsCount
}

export const Task3 = () => {

    const viewItems = data.boards.map((board,index) => {
        return (
            <div key={index}>
                <b>Board:</b> <Board board={board}/>
                <b>Input:</b> {`[[${board.join("] [")}]]`}
                <br/>
                <b>Output:</b> {calculateButtleships(board)}
                <br/><br/>
            </div>
        )
    })

    return (
        <div className="Boards">
            {viewItems}
        </div>
    )
}