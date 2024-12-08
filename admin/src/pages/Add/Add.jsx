import React, {  useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from "axios"

const Add = () => {

  const url = "http://localhost:5000";
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name :"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler = (event) => {
    const name= event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async(event) =>{
     event.preventDefault();
     const formData = new FormData();
     formData.append("name",data.name)
     formData.append("description",data.description)
     formData.append("price",Number(data.price))
     formData.append("image",image)   //there is little bit of difference compared to tutorial
     formData.append("category",data.category)
     
     const response = await axios.post(`${url}/api/food/add`,formData)

     if(response.data.success){ //data has been added successfully to database 
        setData({
          name :"",
          description:"",
          price:"",
          category:"Salad"
        })
        setImage(false)
     }
     else{
       console.error("Error adding food item:", response.data.message);  //I added this additionally
     }
  }

  /*useEffect(()=>{
    console.log(data)
  },[data])*/

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''></img>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' name='image' hidden required/> 
        </div>

        <div className='add-product-name flex-col'>
          <p>Product name </p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here'/>
        </div>

        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6"  placeholder='Write content here' required/>
        </div> 

        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select onChange={onChangeHandler} name='category'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$200'/>
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>      
    </div>
  )
}

export default Add
