//IMPORT SECTIONS
import React, { useContext, useState } from 'react'
import './header.css'
import {Link, Navigate, redirect} from 'react-router-dom';
//icon imports 
import Menu from '../Menu/Menu';
import { AuthContextProvider, AuthOpt } from '../../Context/AuthContext';
import { BookContextProvider } from '../../Context/FormContext';


// ========================================================================================/
const Header = () => {
  const {authInfo,dispatch } = useContext(AuthContextProvider);
 
  const handleLogout = () => {
    if(!window.alert("Sure,You want logout.")){
      dispatch({type: AuthOpt.USER_LOGOUT})
    }
  }

  return (
    <div className="header-container">
      <div className="logo">
        <h3>StayEasy</h3>
        <p>Booking made Simple</p>
      </div>

     <Menu />
     { !authInfo.user ?  
     <div className="login-signup-container">

    <>
        <Link className="login btn btn-second" style={{
          color: "var(--p-color)"
        }} to='/Login'>
      
          Login
        </Link>
        <Link to='/Login?value=signup' style={{
          color: "var(--s-color)"
        }} className="signup btn btn-primary">
         Signup
        </Link>
    </></div>
      : <div style={{
        width: "100%",
      
        alignItems: "center",
        justifyContent: 'flex-end'
      }} className='log-con'><div className="login btn btn-second logout" style={{
        color: "var(--p-color)",
       
      }} onClick={() => handleLogout()}>
    
        Log out
      </div></div> }  
      
    </div>
  )
}

export default Header