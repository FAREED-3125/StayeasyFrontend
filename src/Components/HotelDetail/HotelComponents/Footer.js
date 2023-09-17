import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContextProvider } from '../../../Context/AuthContext'

const Footer = () => {
    const {authInfo} = useContext(AuthContextProvider);
  return (
   <div className="footer-hot">
    <div className="head-foot">
    <h3><NavLink to="/">StayEasy</NavLink></h3>
    <p>Booking made simple</p></div>
    <div className="ul-cont">
        <ul>
            <li>Hotel</li>
            <li>Resorts</li>
            <li>Apartments</li>
            <li>villas</li>
            <li>HomeStays</li>
        </ul>
        <ul>
            <li>Contact-us</li>
            <li>About us</li>
            {
                !authInfo.user && (
                   <> <li><NavLink to='/Login'>Login</NavLink></li>
            <li><NavLink to='/Signup'>Signup</NavLink></li></> 
                )
            }
           
        
        </ul>
    </div>
   </div>
  )
}

export default Footer