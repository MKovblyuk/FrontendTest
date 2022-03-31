import React from "react";
import {BarChart as TemplateBarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts"

export const BarChart = ({data}) => {
    return(
        <TemplateBarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="carBrand" />
            <YAxis dataKey="averagePrice" />
            <Tooltip />
            <Legend />
            <Bar dataKey="averagePrice" fill="#8884d8" />
        </TemplateBarChart>

    )
}