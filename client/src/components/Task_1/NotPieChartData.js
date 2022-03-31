import React from "react";
import "../../css/notPieChartData.css"

export const NotPieChartData = ({message, width, height}) => {
    return (
        <div style={{width, height}} className="NotPieChartData">
            {message}
        </div>
    )
}