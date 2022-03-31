import React from "react";
import '../css/task4.css'
import data from "../task4Data.json"

const compareJSONs = (firstJSON = {}, secondJSON = {}, space = 2) => {
    const keysFirstJSON = Object.keys(firstJSON)
    const keysSecondJSON = Object.keys(secondJSON)

    const resultStrings = []

    // check whether the secondJSON contains data of the firstJSON
    for(let key of keysFirstJSON){
        // get string view value of firstJSON
        const valueFirstJSON = JSON.stringify(firstJSON[key], null, space + 2)

        if(keysSecondJSON.includes(key)){
            if(firstJSON[key] === secondJSON[key]){
                resultStrings.push(`"${key}": ${valueFirstJSON}`)
            }
            else{
                // get string view value of secondJSON
                const valueSecondJSON = typeof secondJSON[key] === "object"
                    ? compareJSONs(firstJSON[key],secondJSON[key], space + 2)
                    : JSON.stringify(secondJSON[key], null, space + 2)

                // write values from two JSONs
                resultStrings.push(`-"${key}": ${valueFirstJSON}`)
                resultStrings.push(`+"${key}": ${valueSecondJSON}`)
            }
        }
        else{
            resultStrings.push(`"${key}": ${valueFirstJSON}`)
        }
    }

    // check whether the firstJSON contains data of the secondJSON
    for(let key of keysSecondJSON){
        if(!keysFirstJSON.includes(key)){
            // get string view value of secondJSON
            const valueSecondJSON = typeof secondJSON[key] === "object"
                ? compareJSONs(firstJSON[key],secondJSON[key], space + 2)
                : JSON.stringify(secondJSON[key], null, space + 2)
            
            resultStrings.push(`+"${key}": ${valueSecondJSON}`)
        }
    }

    let spacing = ""
    for(let i = 0; i < space; i++){
        spacing += " "
    }

    return "{\n" + spacing + resultStrings.join(`,\n${spacing}`) + "\n}"
}

export const Task4 = () => {
    const firstJSON = data.test1.first
    const secondJSON = data.test1.second
    const resultJSON = compareJSONs(firstJSON, secondJSON)

    return (
        <div className="Task4">
            <div>
                First: <br/>
                <textarea value={JSON.stringify(firstJSON, null, 2)} readOnly/>
            </div>
            <div>
                Second: <br/>
                <textarea value={JSON.stringify(secondJSON, null, 2)} readOnly/>
            </div>
            <div>
                Result: <br/>
                <textarea value={resultJSON} readOnly/>
            </div>
        </div>
    )
}