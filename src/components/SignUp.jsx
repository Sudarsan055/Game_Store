import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='Login'>
      <div>
        <form>
            <h1 style={{color:'whitesmoke',fontWeight:'200'}}>Sign Up</h1>
            <input type="text" placeholder='Enter the Username' />
            <input type="email" placeholder='Enter the email Id'/>
            <input type="password" placeholder='Username Password' style={{marginBottom:'10px'}}/>
            <input type="submit" name="" id="" />
            <div style={{width:'20rem',border:'none',color:'white',display:'flex',justifyContent:'space-between',background:'none',alignItems:'center'}}>
                <p>Already have an account.</p>
                <NavLink exact activeClassName='active_class' to='/Login' style={{color:'white'}}>Log In</NavLink>
            </div>
        </form>
      </div>
    </div>
  )
}
