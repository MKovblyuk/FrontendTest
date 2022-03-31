import React, {useState} from "react"
import Input from '@mui/material/Input';
import '../../css/form.css'
import {Button} from "@mui/material"

export const AddingCarForm = ({addCarData,hideForm}) => {
    const [carData, setCarData] = useState({
        carBrand: "",
        countryOfOrigin: "",
        mostPopularModel: "",
        averagePrice: 0
    })

    const inputHandler = (e) => {
        setCarData({...carData, [e.target.name]: e.target.value})
    }

    const checkCarData = () => {
        return parseInt(carData.averagePrice) > 0
    }

    const submitForm = (e) => {
        e.preventDefault()

        if(checkCarData()){
            const newCar = {
                ...carData,
                id: Date.now(),
                averagePrice: Number(carData.averagePrice)
            }
            addCarData(newCar)
        }
        else {
            alert("Incorrect form data")
        }
    }

    return (
        <form onSubmit={submitForm}>
            <div>
                Car Brand: <br/>
                <Input 
                    name="carBrand" 
                    onChange={inputHandler} 
                    required 
                    value={carData.carBrand}    
                />
            </div>

            <div>
                Country Of Origin: <br/>
                <Input 
                    name="countryOfOrigin" 
                    onChange={inputHandler} 
                    required 
                    value={carData.countryOfOrigin}  
                />
            </div>

            <div>
                Most Popular Model: <br/>
                <Input 
                    name="mostPopularModel" 
                    onChange={inputHandler} 
                    required 
                    value={carData.mostPopularModel}
                    margin="dense"
                />
            </div>

            <div>
                Average Price: <br/>
                <Input 
                    name="averagePrice" 
                    onChange={inputHandler} 
                    type="number" 
                    required 
                    value={carData.averagePrice}
                />
            </div>
            
            <Button type="submit" color="secondary" variant="outlined">
                Add
            </Button>
            <Button onClick={hideForm} color="secondary" variant="outlined">
                Cancel
            </Button>
        </form>
    )
}