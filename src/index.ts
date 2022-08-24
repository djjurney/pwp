import {Application} from 'express'
import {Request, Response} from 'express'
const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
require('dotenv').config()

//start express app
const app: Application = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const handleGetRequest = ((request: Request, response: Response)=> {
    return response.json("this thing is on!")
})

const indexRoute = express.Router()

indexRoute.route('/')
    .get(handleGetRequest)

app.use('/apis', indexRoute)

app.listen(4200, () => {
    console.log("express built successfully")
})
