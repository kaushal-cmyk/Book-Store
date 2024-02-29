import mongoose from 'mongoose'
import { mongodbURL} from '../../config.js'

let connectToMongoDB = async()=> {
    mongoose
    .connect(mongodbURL)
    .then((result) => {
        console.log("application connected to the database successfully.")
        
    }).catch((err) => {
        console.log(err.message)
    });
}

export default connectToMongoDB
