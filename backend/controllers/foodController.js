import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food item

const addFood = async(req,res)=>{

    console.log("File:", req.file); // Should show details about the uploaded file
    console.log("Body:", req.body); // Should show other form data

    
    //let image_filename = `${req.file.filename}`;
    let image_filename = req.file ? req.file.filename : "default.jpg"; // Use a default image if none is uploaded

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list
const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    }catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async (req,res) => {
    try{
        const food = await foodModel.findById(req.body.id);//find the foodModel using ID
        fs.unlink(`uploads/${food.image}`,()=>{});
        
        //delete food
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {addFood,listFood,removeFood};