import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './fooditem.css';
import { assets } from '../../frontend_assets/assets';

const FoodItem = ({ id, name, price, description, image, url }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Fallback to default URL if `url` is undefined
  const imageUrl = (url || "http://localhost:5000") + "/images/" + image;

  // Log the image URL to verify
  console.log("Image URL: ", imageUrl);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={imageUrl} alt='food-item' />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
