
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

    await Team.create(req.body)
    res.json({ "status": "success" })
})

