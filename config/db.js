import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kevinandrews001:kevinandrews18@cluster0.n2ze3.mongodb.net//food-del').then(()=>console.log("DB Connected"));
   
}


