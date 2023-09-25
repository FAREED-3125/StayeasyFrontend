import React, { useContext, useState } from "react";
import { BookContextProvider } from "../../Context/FormContext";
import HotPrice from "../HotelDetail/HotelPrice/HotPrice";
import Loading from '../Loading/Loading'
import "./payment.css";
import { AuthContextProvider } from "../../Context/AuthContext";
import { createnewBookings } from "../../hooks/useBookings";
import { UpdateRoomnumber } from "../../hooks/useRooms";
import { useNavigate } from "react-router-dom";

const Payment = ({ data, state1, editpay, setpay }) => {
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContextProvider);
  const { bookInfo } = useContext(BookContextProvider);
  const [loading,setloading] = useState(false)
  const payamount = (
    (data.cheapestprice * (Number(state1?.rooms) || 1) -
      ((data.cheapestprice * data.offer) / 100) * (state1?.rooms || 1)) *
    (bookInfo.days || 1)
  ).toFixed(2);
  const [phone,setphone] = useState(0)
 
  const createBookings = () => {
    if(window.confirm("Are you sure you want to Proceed?")){
      if(bookInfo?.from && bookInfo?.to && bookInfo?.guest)
    {if(phone >= 10){
        try{
      setloading(true)
         const body =  {
    name : authInfo?.user.username,
    email: authInfo?.user.email,
    fromdate: bookInfo?.from,
    enddate: bookInfo?.to,
    guests: bookInfo?.guest,
    betdates: bookInfo?.betDates,
    phonenumber: phone,
    roomids: bookInfo?.roomid
    }
    const {data,err }= createnewBookings(body,authInfo?.user?._id);
    if(err) throw err
    console.log(data)
    const {data: addrdata,err: addrerr} = UpdateRoomnumber(bookInfo.roomid,bookInfo.betDates)
    if(addrerr) throw addrerr
    console.log(addrdata)
    return navigate('/')
    }catch(err){
      console.log(err.message);
    }finally{
      setloading(false)
    }
    }else{
      console.log("phone not valid");
    }}else{
      window.alert("Enter all fields.")
    }
  }else{
    return
  }
 
  }

  return (
    <>
      <div
        className="payment-container0"
        style={{
          transform: editpay ? "translate(0,0)" : "translate(0,-500%)",
          transition: "all .5s ease-in-out",
        }}
      >
        {
          loading ? (
            <Loading width={"15px"} height={"15px"}/>
          ) : (
            <> <div className="payment-container">
          <div className="pay-head">
            <h4>Details</h4>
            <div className="back-btn " onClick={() => setpay(false)}>
              back
            </div>
          </div>
          <form action="" className="payment-form">
            <div className="input-area">
              <label style={{}} htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                required
                placeholder=" abcd12345@gmail.com"
                value={authInfo?.user?.email}
                readOnly
              />
            </div>
            <div className="input-area">
              <label style={{}} htmlFor="phonenumber">
                Phone number
              </label>
              <input type="text" required placeholder="eg: 1234567890" onChange={(e) => setphone(e.target.value)}/>
            </div>
            <div className="room-no-container">
              <div className="room-de-cont">Room selected:</div>
              {bookInfo?.roomnumber.map((room, index) => (
                <div className="ro-cont-payment" key={index}>
                  <span>Room no: </span>
                  <span>{room}</span>
                </div>
              ))}
            </div>
            <div className="pay-cont1">
              <div className="pay-de">
                <p>Payable Amount</p>
                <h5>Rs.{payamount}/-</h5>
              </div>
              <div
                className="btn btn-second"
                style={{
                  color: "var(--p-color)",
                }}
                onClick={() => {
                
                  createBookings()}}
              >
                pay at Hotel
              </div>
            </div>
          </form>
        </div>
            </>
          )
        }
       
      </div>
    </>
  );
};

export default Payment;
