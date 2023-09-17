// IMPORT SECTION
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { searchContext } from "./Search";
import './search2.css'
// =======================================================================================
const SearchBox = ({ data }) => {
  const { edit,city,from,to,adult1,rooms1,child1,guest1 } = useContext(searchContext);
  const [style,setStyle] = useState("");
  const navigate = useNavigate();
  
  return data.map((item, index) => (
    <div
      className="search-box"
      style={{
        height: "max-content",

        opacity: edit && ".5",
      }}
      key={index}
    >
      <div
        className="search-img-box"
        style={{
          borderRadius: ".3rem",
        }}
      >
           <div className="img" >
        {item.photos.map((photo, index) => (
       
            <img src={photo}  key={index} alt="Hotelphotos" />
         
        ))} </div>
      </div>
      <div className="hotel-info"  onClick={() => {
          navigate(`/hoteldetails/${item._id}`,{state: {id: item._id,city: city,from: from || '--/--/----',to: to || '--/--/----',adult: adult1,child: child1,rooms: rooms1,guest: guest1}})
         }} style={{}}>
        <div className="hotel-name-rating">
          <h3
            style={{
              textTransform: "uppercase",
            }}
          >
            {item.name}
          </h3>
          <div className="rating">
            <p>rating:</p>
            <div
              className="rating-box"
            >
              {" "}
              <BsStarFill />
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
        <p className="st-add">
          {item?.shortaddress
            ? item.shortaddress
            : "Near The International airport ,300m away from city center"}
        </p>
        <div
          className="feature-box"
          style={{
            color: "var(--g-color)",
          }}
        >
          <div className="f-box">
            {item?.ac && <span className="feature ac">Ac</span>}
            {item?.freefood && (
              <span className="feature freefood">Free Food</span>
            )}
            {item?.freecancellation && (
              <span className="feature freecancellation">
                Free cancellation
              </span>
            )}{" "}
          </div>
         
        </div>
        <div
            className="price"
            style={{
             
            }}
          >
            <h4
              align="right"
              style={{
                display: "inline-block",
              }}
            >
              rs :{" "}
              <p
                style={{
                  color: "#D81E53",
                  display: "inline",
                }}
              >
                ₹{item.cheapestprice} <span style={{
                  color: "var(--y-color)",
                  fontSize: "12px"
                }}>{ item.offer ? `(${item.offer}% off)` : ""}</span>
              </p>
            </h4>
          </div>
        <div className="button-container"  onClick={() => {
          navigate(`/hoteldetails/${item._id}`,{state: {id: item._id,city: city,from: from,to: to,adult: adult1,child: child1,rooms: rooms1,guest: guest1}})
         }} >
          <div 
        
            className="btn btn-primary"
            style={{
              color: "var(--s-color)",
            }}
          >
            View Details
          </div>
          <Link
            className="btn btn-second"
            style={{
              color: "var(--p-color)",
            }}
          >
            Book now
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default SearchBox;
