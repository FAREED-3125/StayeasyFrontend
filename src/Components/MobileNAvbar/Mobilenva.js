// IMPORT SECTION
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLoaderData, useLocation } from 'react-router-dom'
import {GrHomeRounded} from 'react-icons/gr'
import {LuHotel} from 'react-icons/lu'
import {VscAccount} from 'react-icons/vsc'
import {BiSearch} from 'react-icons/bi'
import './mobilenavbar.css'
import { BookContextProvider } from '../../Context/FormContext'
// =======================================================================================

const Mobilenva = () => {
   const {bookInfo} = useContext(BookContextProvider)
  
  return (
    <div className="mobile-navbar">
      <div className="mobile-menus" >
          <NavLink className="mlink" to='/'><GrHomeRounded/><p style={{
            fontSize: "13px"
          }}>Home</p></NavLink>  <NavLink className="mlink" to={`/search?city=${bookInfo?.city[0]}` } > <BiSearch/><p style={{
            fontSize: "13px"
          }}>Search</p></NavLink>
          <NavLink className="mlink" to='/Booking'><LuHotel/><p style={{
            fontSize: "13px"
          }}>Bookings</p></NavLink>
          <NavLink className="mlink" to='/account'> <VscAccount/><p style={{
            fontSize: "13px"
          }}>Account</p></NavLink>
         
       
      </div>
    </div>
  )
}

export default Mobilenva