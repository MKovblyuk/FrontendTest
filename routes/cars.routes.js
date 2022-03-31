const Router = require("express")
const router = Router()
const fs = require("fs")
const path = require('path')
const config = path.join(__dirname, '../carsData.json');


router.get(
    "/",
    async (req, res) => {
        try{
            const content = JSON.parse(fs.readFileSync(config));
            return res.status(200).json({carsData: content.carsData})
        } catch(e){
            return res.status(500).json({message: "something was wrong"})
        }
    }
)

router.post(
    "/add",
    async(req, res) => {
        try{
            const content = JSON.parse(fs.readFileSync(config))
            content.carsData.push(req.body.car)
            fs.writeFileSync(config, JSON.stringify(content, null, 2))

            return res.status(201).json({message: "Car was added"})
        } catch(e){
            res.status(500).json({message: "something was wrong"})
        }
    }
)

router.post(
    "/update",
    async(req, res) => {
        try{
            let content = JSON.parse(fs.readFileSync(config))
            const index = content.carsData.findIndex(car => car.id === req.body.car.id)
            content.carsData[index] = req.body.car
            fs.writeFileSync(config, JSON.stringify(content, null , 2))

            return res.status(200).json({message: "Car was updated"})
        } catch(e){
            res.status(500).json({message: "something was wrong"})
        }
    }
)

router.delete(
    "/",
    async(req, res) => {
        try{
            let content = JSON.parse(fs.readFileSync(config))
            let newCars = content.carsData.filter(item => !req.body.cars.find(car => car.id === item.id))
            
            content.carsData = newCars
            fs.writeFileSync(config, JSON.stringify(content, null, 2))

            return res.status(200).json({message: "Car was deleted"})
        } catch(e){
            res.status(500).json({message: "something was wrong"})
        }
    }
)


module.exports = router