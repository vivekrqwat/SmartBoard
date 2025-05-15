
import mongoose, { mongo } from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/smartboard');
        console.log("MongoDb Connected")

    }catch(error){
        console.log('Error connecting to Mongodb: ',error);
    }
}

export default connectDB;