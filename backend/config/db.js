import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelivery:shanishashi2024@cluster0.rmhkh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
