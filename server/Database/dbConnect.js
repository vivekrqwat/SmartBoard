
import mongoose, { mongo } from "mongoose";

const connectDB = async () =>{
    try{                      
        const  MONGO_URI='mongodb+srv://smartboard:smartboard1234@cluster0.esrmk.mongodb.net/smartboard';

        await mongoose.connect(MONGO_URI)
     
        console.log("MongoDb Connected")

    }catch(error){
        console.log('Error connecting to Mongodb: ',error); 
    }
}

export default connectDB;