const express = require("express")

const app = express()
const PORT = 5000

app.use(express.json({extended: false}))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type")
    next()
})

app.use("/api/cars", require("./routes/cars.routes"))

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))