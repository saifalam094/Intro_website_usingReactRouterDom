import React from 'react'
import {Link} from 'react-router-dom'
import './components.css'

const Navbar = () => {
  return (
    <div className='navbarstyle'>
   <Link to="home" className='navItem'>Home</Link>
   <Link to="about" className='navItem'>About</Link>
   <Link to="contact" className='navItem'>Contact</Link>
   <Link to="gallery" className='navItem'>Gallery</Link>
   <Link to="blogs" className='navItem'>Blogs</Link>
  

    </div>
  )
}

export default Navbar
