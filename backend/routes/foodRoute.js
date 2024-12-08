import express from "express";
import { addFood,listFood,removeFood} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine
const storage=multer.diskStorage({
    destination:"uploads/",
    filename:(req,file,cb)=>{
        //return cb(null,`${Date.now()}${file.originalname}`);      //I have commented this beacuse of image didn't upload with this
        cb(null, `${Date.now()}-${file.originalname}`); //got from chatgpt
    },
});

//const upload = multer ({storage:storage})         //I have commented this beacuse of image didn't upload with this
const upload = multer({ storage }); //got from chatgpt
 

foodRouter.post("/add",upload.single("image"),addFood)
//foodRouter.post("/add", addFood); // Remove multer middleware temporarily
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;