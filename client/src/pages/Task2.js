import React from "react";
import data from "../task2Data.json"


const quickSort = (arr) => {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

export const Task2 = () => {
    const arrays = data.arrays
    const results = arrays.map((arr,index) => {
        return (
            <div key={index}>
                {`${arr} => ${quickSort(arr)}`}
            </div>
        )
    }) 

    return (
        <div>
            {results}
        </div>
    )
}
