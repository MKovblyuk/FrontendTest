import React from "react"
import "../../css/board.css"

export const Board = ({board}) => {
    const data = board.map((row,index) => {
        return (
            <tr key={index}>
                {row.map((cell,index) => <td key={index}>{cell}</td>)}
            </tr>
        )
    })

    return(
        <table border="1" cellSpacing="0">
            <tbody>{data}</tbody>
        </table>
    )
}