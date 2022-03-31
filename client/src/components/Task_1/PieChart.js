import React from "react";
import {PieChart as TemplatePieChart, Pie, LabelList} from "recharts"
import { NotPieChartData } from "./NotPieChartData";


export const PieChart = ({data}) => {
    return(
        data && data.length > 0 ?
            <TemplatePieChart width={500} height={450}>
                <Pie 
                data={data} 
                dataKey="averagePrice" 
                nameKey="carBrand" 
                cx="50%" 
                cy="50%" 
                innerRadius={40} 
                outerRadius={180} 
                fill="#82ca9d" 
                label
                >
                    <LabelList 
                        style={{fontSize: "12px", fontWeight: "100"}} 
                        dataKey="carBrand" 
                        clockWise="0.5"
                    />
                </Pie>
            </TemplatePieChart>
        :
            <NotPieChartData message={"Select rows"} width={500} height={450}/>
    )
}