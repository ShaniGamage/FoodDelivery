import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../frontend_assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
  
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='logo' className='logo'></img></Link>
        <ul className='navbar-menu'>
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":" "}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"? "active":" "}>Menu</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":" "}>Contact Us</a>
        </ul>
        

        <div className='navbar-right'>
            <img src={assets.search_icon} alt='search-icon'></img>
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} alt=''></img></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:
            <div className='navbar-profile'>
                <img src={assets.profile_icon} alt=''></img>  
                <ul className='nav-profile-dropdown'>
                  <li><img src={assets.bag_icon} alt=''></img><p>Orders</p></li>
                  <hr/>
                  <li><img src={assets.logout_icon} alt=''></img><p>Logout</p></li>
                </ul>
            </div>}
            
        </div>
    </div>
  )
}

export default Navbar
