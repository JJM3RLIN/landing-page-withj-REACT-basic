import React from 'react'
import Nav from './Nav.jsx'
import NavMobile from './NavMobile.jsx';

const Header = () => {

  return (
    
    <header className='header section'>
       <div className='contenedor'>
       <NavMobile />
        <Nav/>
       <div className='header-info'>
         <h1>A modern publishing Plataform</h1>
         <p>Grow your audience and build your online brand</p>
         <div className='header-botones'>
           <a href="#" className='btn btn-white'>Start for free</a>
           <a href="#" className='btn btn-transparent'> Learn More</a>
           </div>
         </div>
         </div>
    </header>
  )
}

export default Header