import React, { useEffect, useState } from "react";
import {BarChart} from "../components/Task_1/BarChart"
import {PieChart} from "../components/Task_1/PieChart"
import {DataTable} from "../components/Task_1/DataTable"
import '../css/task1.css'

const fetchCars = async () => {
    try{
        const response = await fetch("http://127.0.0.1:5000/api/cars/", {method: "GET"})
        const cars = await response.json()
        return cars.carsData
    }catch(e){
        return []
    }
}


export const Task1 = () => {
    const [carsData, setCarsData] = useState([])
    const [selectedCarsData, setSelectedCarsData] = useState([])

    useEffect(() => {
        fetchCars().then(data => {
            if(data){
                setCarsData(data)
            }
        })
    },[])

    const deleteSelectedRows = () => {
        // send selected cars data on server and delete them
        fetch("http://127.0.0.1:5000/api/cars", {
            method: "DELETE", 
            body: JSON.stringify({cars: selectedCarsData}),
            headers: {"Content-Type": "application/json"}
        })

        // delete cars data in local state
        const newCarsData = carsData.filter(item => !selectedCarsData.includes(item))
        setCarsData(newCarsData)
    }

    const addCarData = (car) => {
        // send data on server
        fetch("http://127.0.0.1:5000/api/cars/add", {
            method: "POST", 
            body: JSON.stringify({car}),
            headers: {"Content-Type": "application/json"}
        })

        setCarsData([...carsData, car])
    }

    const changeCarsData = (car) => {
        // send new data on server
        fetch("http://127.0.0.1:5000/api/cars/update", {
            method: "POST", 
            body: JSON.stringify({car}),
            headers: {"Content-Type": "application/json"}
        })

        // change data in local state
        let cars = [...carsData]
        const index = cars.findIndex(c => c.id === car.id)
        cars[index] = car
        setCarsData(cars)
    }


    return (
        <div className="Task1">
            <DataTable 
                data={carsData} 
                setSelectedCarsData={setSelectedCarsData}
                deleteSelectedRows={deleteSelectedRows}
                changeCarsData={changeCarsData}
                addCarData={addCarData}
            />
            <div className="Charts">
                <BarChart data={carsData}/>
                <PieChart data={selectedCarsData}/>
            </div>
        </div>
    )
}