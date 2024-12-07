import express from "express";
import { addFood,listFood,removeFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine
const storage=multer.diskStorage({
    destination:"uploads/",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`);
    },
});

const upload = multer ({storage:storage})//this is a middleware//use to save image in the upload folder

//there are two lines below.first line use when we add image also.But the case is we can't upload image using thunder client as tutorial.

foodRouter.post("/add",upload.single("image"),addFood)
//foodRouter.post("/add", addFood); // Remove multer middleware temporarily
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;