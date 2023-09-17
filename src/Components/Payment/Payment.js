import React,{useContext} from 'react'
import { BookContextProvider } from '../../Context/FormContext'

import './payment.css'
import { AuthContextProvider } from '../../Context/AuthContext'

const Payment = ({
    data,state1,editpay,setpay
}) => {
  const {authInfo} = useContext(AuthContextProvider);
    const {bookInfo} = useContext(BookContextProvider)
    const payamount = (((data.cheapestprice * (Number(state1?.rooms) || 1))-(((data.cheapestprice * data.offer) / 100)*((state1?.rooms) || 1)) )*(bookInfo.days || 1)).toFixed(2)
    
  return (
    <div className='payment-container0' style={{
      transform: editpay ? "translate(0,0)" : "translate(0,-500%)" ,
      transition: "all .5s ease-in-out"
      
    }}>
<div className="payment-container" >
  <div className="pay-head">
    <h4>Details</h4>
  <div className="back-btn " onClick={()=> setpay(false)}>back</div>

  </div>
  <form action="" className='payment-form'>
    <div className="input-area">
    <label style={{
     
    }} htmlFor="email">E-mail</label>
    <input type="text" required placeholder=' abcd12345@gmail.com' value={authInfo?.user?.email} /></div>
    <div className="input-area">
    <label style={{
     
    }} htmlFor="phonenumber">Phone number</label>
    <input type="text" required placeholder='eg: 1234567890' /></div>
    <div className="pay-cont1">
        <div className="pay-de" ><p>Payable Amount</p>
        <h5>Rs.{payamount}/-</h5></div>
        <div className="btn btn-second" style={{
          color: "var(--p-color)"
        }}>pay at Hotel</div>
    </div>
  </form>
   

</div>
 
</div>
  )
}

export default Payment