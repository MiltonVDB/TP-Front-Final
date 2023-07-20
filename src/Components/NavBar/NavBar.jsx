import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
import { useCustomContext } from '../../ContextManager/ContextProvider';


const NavBar = () => {

  return (
    
    <nav className='y-center mb-4'>

      <div className='container y-center'>
        
        <div className='logo-icon'>

            <i className="bi bi-bank"></i>

        </div>

        <h5 className='name-brand'>Market Center</h5>

        
        

        <NavLink className='form-menu' to='/form'>Contacto</NavLink>

        <NavLink className='home-menu' to='/'><i className="bi bi-house-door-fill"></i></NavLink>

        <NavLink className='cart-menu' to='/cart'><i className="bi bi-cart-fill"></i></NavLink>

      </div>

    </nav>
  )
}

export default NavBar