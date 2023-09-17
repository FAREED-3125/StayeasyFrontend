import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import HotelDis from './hotelDis'
import HotelBop from './HotelBop'
import HotelImgs from './HotelImgs'
import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './hoteldetail.css'
import Loading from '../Loading/Loading'
import { BookContextProvider, FormOpt } from '../../Context/FormContext'
import Footer from './HotelComponents/Footer'
import { format } from 'date-fns'
import Payment from "../Payment/Payment";

const HotelDetails = () => {
  const [editpay,setpay] = useState(false);
  const {id} = useParams();
  const location = useLocation();
  const {state} = location;
  const {bookInfo,dispatch} = useContext(BookContextProvider) 
  const {data,loading,err} = useFetch(`Hotels/find/${id}`);
  function getDayDifference(startDate, endDate) {
    // Create Date objects from the input strings
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = date2 - date1;
  
    // Convert milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    return Math.abs(Math.round(differenceInDays)); // Use Math.abs to ensure a positive result
  }
  
  function getDatesBetween(startDate, endDate) {
    let dates = [];
    let currentDate = new Date(startDate);
    
  
    while (currentDate <= endDate) {
      dates.push(format(new Date(currentDate),'yyyy-MM-dd'));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  
  
  
 
  useEffect(() => {
       const dayDifference = getDayDifference(state?.from, state?.to);
       const betweenDates = getDatesBetween(new Date(`${state?.from}`),new Date(`${state?.to}`));
       console.log(new Date(`${state?.from}`))
       dispatch({type: FormOpt.UPDATE_SEARCH,payload: {city: [state?.city],days: dayDifference,from: state?.from,to: state?.to,betDates: betweenDates}});
  },[])
  
 
  return (
    <><div className='hotel-detail-container' style={{
      opacity: editpay ? ".6" : "1"
    }}>
        <Header/>
        {
          loading ?  <Loading
          width={"30px"}
          height={"30px"}
          width2={"100vw"}
          height2={"100dvh"}
        /> : (
        <><HotelImgs data = {data} loading={loading}/>
        <HotelDis getDayDifference={getDayDifference} setpay={setpay}  getDatesBetween={getDatesBetween} data={data} state={state}/>
        

     
        </>)
        }
        
    </div><Payment editpay={editpay} editpay={editpay} setpay={setpay} data= {data}/>
    </>
  )
}

export default HotelDetails