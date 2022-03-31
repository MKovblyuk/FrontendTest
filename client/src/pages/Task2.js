import React from "react";
import data from "../task2Data.json"

// const arrays = [
//     [1,4,6,3,4,6,5,3,4,2,6,5,3,4,6,4,3],
//     [34,45,56,78,2,34,23,2,2,2,3,4,5,6],
//     [-2,-3,4,5,-6,0,0,2,435,23,32,4,5,6],
//     [1,5,4,2,3,6,4,6,-3,0,4,5,6,32,5,34],
//     [1,23,45,4,2,35,4,67,7,8,56,56,43,3]
// ]


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