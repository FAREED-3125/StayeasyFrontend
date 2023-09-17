import React, { useContext,useEffect } from 'react'
import { BsCalendarCheck } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";
import Filter2 from '../../Filter/Filter2';
import './hotel2.css'
import { BookContextProvider, FormOpt } from '../../../Context/FormContext';
const Hot3 = ({edit,setEdit,state,setState,state1,getDayDifference,getDatesBetween}) => {
  const {bookInfo,dispatch} = useContext(BookContextProvider)
  useEffect(() => {
    const dayDifference = getDayDifference(state1?.from, state1?.to);
    const betweenDates = getDatesBetween(new Date(`${state1?.from}`),new Date(`${state1?.to}`));
    dispatch({type: FormOpt.UPDATE_SEARCH,payload: {days: dayDifference,from: state1.from,to: state1?.to,guest: state1?.guest,rooms: state1?.rooms,children: state1?.child,adults: state1?.adult,betDates: betweenDates}});
   
},[state1])
  return (
    <div className="stayInfo">
    <h4 className="stayInfo-head">Date of Travel & Guests</h4>
    <div className="allInfo" onClick={() => {
      setEdit(ps => !ps)
    }}>
    <div className="dateInfo">
      <div className="dateInfo1"><BsCalendarCheck/> </div>
        <div className="dateInfo2">
          <p>{(bookInfo?.from !== null) ? bookInfo?.from :  "--/--/---"} - {(bookInfo.to !== null)? bookInfo.to : "--/--/----"}</p>
          <p>12.00 PM - 11.00 PM</p>
        </div>
     
    </div>
    <div className="line"></div>
    <div className="roomInfo">
      <div className="roomInfo1"><BsPersonFillAdd /> </div>
        <div className="roomInfo2">
          <p>{bookInfo?.rooms || 0}Rooms</p>
          <p>{bookInfo?.guest || 0}Guests</p>
        </div>
     
    </div>
  </div>
  <Filter2 edit={edit} setEdit={setEdit} state={state} setState={setState}/>
    </div> 
  )
}

export default Hot3