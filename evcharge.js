
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

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