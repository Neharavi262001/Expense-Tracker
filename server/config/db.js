import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(`MongoDB connection failed`,error.message)
        process.exit(1)
    }
}
