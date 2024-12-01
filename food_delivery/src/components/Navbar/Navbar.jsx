import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../frontend_assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='logo' className='logo'></img>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"? "active":" "}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"? "active":" "}>Menu</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":" "}>Contact Us</li>
        </ul>
        

        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search-icon'></img>
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon}></img>
                <div className='dot'></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
