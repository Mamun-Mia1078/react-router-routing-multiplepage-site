import {NavLink} from "react-router-dom"
import React from 'react'

const Navbar = () => {
 
  
  return (
   <nav>
    <NavLink to= "/" className="nav-link" >Home</NavLink>
    <NavLink to= "/blogs" className="nav-link" >Blog</NavLink>
   <NavLink to="/contact" className="nav-link" >Contact</NavLink>
   

   </nav>
  )
}

export default Navbar