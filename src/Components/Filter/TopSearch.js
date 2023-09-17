// IMPORT SECTION
import React, { useContext } from 'react'
import './filter.css'
import { searchContext } from '../Search.js/Search'
import { Link, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
// =======================================================================================

const TopSearch = () => {
    const {setEdit,guest1,from,to,rooms1,city} = useContext(searchContext)
    const navigate = useNavigate();
  return (
    <div className="top-search-container" onClick={() => setEdit(true)}>
     
        <div className="top-destination">
            <input type="text" readOnly value={city} />
        </div>
        <div className="top-dates">
            <div className='from'> <span className='span'>from</span>
            <p>{from ? from : "--/--/----"}</p></div>
            <div className='to'> <span className='span '>to</span>
            <p>{to ? to : "--/--/----"}</p></div>
         </div>
        <div className="top-guests">
            <p>Rooms: {rooms1 ? rooms1 : "--"}</p>
            <p>Guest: {guest1 ? guest1 : "--"}</p>
        </div>
    </div>
  )
}

export default TopSearch