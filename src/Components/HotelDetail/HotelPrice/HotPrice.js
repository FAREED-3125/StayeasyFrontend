import React, { useContext } from "react";
import "./hotel4.css";
import { useNavigate } from "react-router-dom";
import { BookContextProvider } from "../../../Context/FormContext";
import { AuthContextProvider } from "../../../Context/AuthContext";
const HotPrice = ({ data, state1, setpay }) => {
  const navigate = useNavigate();
  const { authInfo } = useContext(AuthContextProvider);
  const { bookInfo } = useContext(BookContextProvider);
  const payamount = (
    (data.cheapestprice * (Number(state1?.rooms) || 1) -
      ((data.cheapestprice * data.offer) / 100) * (state1?.rooms || 1)) *
    (bookInfo.days || 1)
  ).toFixed(2);

  const totalAmount = (
    (data.cheapestprice * (Number(state1?.rooms) || 1) -
      ((data.cheapestprice * data.offer) / 100) * (state1?.rooms || 1)) *
    (bookInfo.days || 1)
  ).toFixed(2);

  return (
    <>
      <div className="price-container">
        <h4>Price details</h4>
        <div className="price-de-cont">
          <div className="price-de price-de1">
            <div className="price1">
              <p>
                Price: <span>(per rooms)</span>
              </p>
            </div>
            <div className="price2">
              <p>
                <span>Rs </span>
                {data.cheapestprice} <span>/-</span>
              </p>
            </div>
          </div>

          <div className="price-de price-de2">
            <div className="price1">
              <p>rooms</p>
            </div>
            <div className="price2">
              <p>
                {`${state1?.rooms || 1}`}{" "}
                <span>{state1?.rooms > 1 ? "rooms" : "room"}</span>
              </p>
            </div>
          </div>
          <div className="price-de price-de3">
            <div className="price1">
              <p>Discount</p>
            </div>
            <div className="price2">
              <p>
                {`${data.offer || 0}%`} <span>Off</span>
              </p>
            </div>
          </div>
          <div className="price-de price-de6">
            <div className="price1">
              <p>Days</p>
            </div>
            <div className="price2">
              <p>
                {`${bookInfo.days || 1}`} <span>days</span>
              </p>
            </div>
          </div>
          <div className="price-de price-de4">
            <div className="price1"></div>
            <div className="price2">
              <p>
                <span>
                  {data.cheapestprice *
                    (bookInfo.days || 1) *
                    (state1?.rooms || 1)}{" "}
                  -{" "}
                </span>
                {Math.floor(
                  ((data.cheapestprice * data.offer) / 100) *
                    (state1?.rooms || 1) || 0
                ) * (bookInfo.days || 1)}{" "}
                <span>/-</span>
              </p>
            </div>
          </div>
          <div className="price-de price-de5">
            <div className="price1">
              <p>Total Amount</p>
            </div>
            <div className="price2">
              <p>Rs.{totalAmount}/- </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="pay-cont">
        <div className="pay-de">
          <p>Payable Amount</p>
          <h5>Rs.{payamount}/-</h5>
        </div>
        <div
          className="btn btn-primary"
          onClick={() => {
            if (authInfo?.user?.username) {
              if(bookInfo?.from !== "--/--/----" && bookInfo?.to !== "--/--/----" && bookInfo?.guest)
              {setpay(true)}else{
                window.alert("Invalid dates,please update Dates.")
              }
            } else {
              if (
                window.confirm(
                  "By clicking Ok,You are redirected to Loginpage."
                )
              ) {
                navigate("/Login");
              } else {
                return;
              }
            }
          }}
        >
          Proceed
        </div>
      </div>
    </>
  );
};

export default HotPrice;
