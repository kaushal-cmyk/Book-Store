import express from "express"
import { PORT, mongodbURL} from './config.js'
import connectToMongoDB from "./src/connectToDB/connectToMongoDB.js"
import bookRouter from "./src/router/bookRouter.js"
import cors from 'cors'

let expressApp = express()
expressApp.use(express.json())


// Middleware for handling cors policy.
expressApp.use(cors())
// expressApp.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['POST', 'GET', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-type']
// }))
let port = PORT

expressApp.listen(port, ()=> {
    console.log(`express application is listening at port ${port}`)
})

connectToMongoDB()


//Requests
expressApp.use("/books", bookRouter)