
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://shaun:ares2008@cluster0.dsyjzb7.mongodb.net/ev-charge?appName=Cluster0").then(

    () => {
        console.log("mongodb connected")
    }

).catch((error) => {
    console.log(error)
})

const Vehicle = mongoose.model("Vehicles", new mongoose.Schema(
    {
        bookingId: String,
        ownerName: String,
        email: String,
        phone: String,
        vehicleRegistrationNumber: String,
        vehicleBrand: String,
        vehicleModel: String,
        batteryCapacity: Number,
        connectorType: String,
        chargingDate: Date,
        timeSlot: String,
        estimatedUnits: Number,
        chargingBayNumber: String
    }
))

app.get("/test", (req, res) => {

    res.send("hello world")
})

app.post("/add-vehicle", async (req, res) => {

    await Vehicle.create(req.body)
    res.json({ "status": "success" })
})

app.post("/view-vehicle", async (req, res) => {

    const vehicles = await Vehicle.find()
    res.json(vehicles)
})

app.listen(3000, () => {

    console.log("server started")
})