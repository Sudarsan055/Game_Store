import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar' style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(transparent,rgba(0,0,0,1))'}}>
        <div style={{width:'10rem',height:'5rem'}}><img src="https://t3.ftcdn.net/jpg/05/99/53/58/360_F_599535831_pwQFVG0qtf6ksLXeVTnUwFMvoW5H0WiS.jpg" alt="logo" style={{width:'10rem',height:'5rem',borderRadius:'1rem'}} /></div>
        <NavLink exact activeClassName='active_class' to='/Login'><button style={{marginRight:'5vw',width:'6rem',height:'2rem',borderRadius:'1rem'}}>Log In</button></NavLink>
    </div>
  )
}
