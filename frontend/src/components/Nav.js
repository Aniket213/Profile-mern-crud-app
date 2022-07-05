import React from 'react'
import './Nav.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Nav = (props) => {
  const navigate = useNavigate();
  const modeclicked = ()=>{
    props.modeclicked();
  }

  // ----------------------------------------------------------------------------------------------
  
  // ----------------------------------------------------------------------------------------------

  return (
    <div className='nav'>
        <div className="navleft" onClick={()=>{ navigate('/') }}>
          <i className=" rubber logoimg fa-solid fa-user"></i>
          <p className=' rubber logotext'>profs</p>
        </div>
        <div className="navright">
            <NavLink className='navlinks navlink1' to='/' >
              <span className='navspan a1'></span>
              <span className='navspan b1'></span>
              <span className='navspan c1'></span>
              <span className='navspan d1'></span>
              AllUsers
            </NavLink>
            <NavLink className='navlinks navlink2' to='/add' >
              <span className='navspan a2'></span>
              <span className='navspan b2'></span>
              <span className='navspan c2'></span>
              <span className='navspan d2'></span>
              AddUser
            </NavLink>
            <NavLink className='navlinks navlink3' to='/about' >
              <span className='navspan a3'></span>
              <span className='navspan b3'></span>
              <span className='navspan c3'></span>
              <span className='navspan d3'></span>
              About
            </NavLink>
            <input id="toggle" className="toggle" type="checkbox" onClick={modeclicked} />
        </div>
    </div>
  )
}
