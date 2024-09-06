import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className='Login'>
      <div>
        <form>
            <h1 style={{color:'whitesmoke',fontWeight:'200'}}>Login</h1>
            <input type="text" placeholder='Enter the Username' />
            {/* <input type="email" placeholder='Enter the email Id'/> */}
            <input type="password" placeholder='Username Password' style={{marginBottom:'10px'}}/>
            <input type="submit" name="" id="" />
            <div style={{width:'20rem',border:'none',color:'white',display:'flex',justifyContent:'space-between',background:'none',alignItems:'center'}}>
                <p>Don't have any account?</p>
                <NavLink exact activeClassName='active_class' to='/SignUp' style={{color:'white'}}>Sign Up</NavLink>
            </div>
        </form>
      </div>
    </div>
  )
}
