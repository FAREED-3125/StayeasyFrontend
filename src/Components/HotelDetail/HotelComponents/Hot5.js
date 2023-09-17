import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { useFetch } from "../../../hooks/useFetch";

const Hot5 = ({ data}) => {
  const {data: data1,loading,err} = useFetch(`Review/countByRating/${data?._id}`)
  let totel_rat  =0;
  for(let i in data1[0]){
   totel_rat+= data1[0][i]
  
  }

  return (
    <>
      <div className="call-container">
        <div className="all-head">
          <h4>Need Help with your Booking.</h4>
          <p>Call to book or inquire</p>
        </div>
        <div className="call-i">
          <BiPhoneCall />
        </div>
        <a href={`tel:${data.phonenumber}`} className="call-btn btn btn-primary">
          <p style={{
            color: "var(--b1-color)"
          }}>call us </p>
        </a>{" "}
      </div>
     { !loading && <div className="review-container">
        <div className="re-head">
          <h4>Rating and reviews</h4>{" "}
          <h4>
            <span>
              {" "}
              <BsStarFill />
              <span> {data.rating}</span>
            </span>
            <span className="span2">{data.reviews ?  data.reviews.length : "no"} ratings</span>
          </h4>
        </div>
        <div className="rating-1">
          <div className="rat-line">
            <h3>
              <BsStarFill />
              <span>5</span>
            </h3>
            <div className="rat-l">
              <div className="rat-l1" style={{
                right: `${100 -(data1[0]?.five/totel_rat)*100}%`
              }}></div>
            </div>
            <div className="rat-no">{data1[0]?.five} <span>  ratings</span></div>
          </div>
          <div className="rat-line">
            <h3>
              <BsStarFill />
              <span>4</span>
            </h3>

            <div className="rat-l">
              <div className="rat-l1" style={{
                right: `${100 -(data1[0]?.four/totel_rat)*100}%`
              }}></div>
            </div>
            <div className="rat-no">{data1[0]?.four} <span>ratings</span> </div>
          </div>
          <div className="rat-line">
            <h3>
              <BsStarFill />
              <span>3</span>
            </h3>

            <div className="rat-l">
              <div className="rat-l1" style={{
                right: `${100 -(data1[0]?.three/totel_rat)*100}%`
              }}></div>
            </div>
            <div className="rat-no">{data1[0]?.three} <span> ratings</span></div>
          </div>
          <div className="rat-line">
            <h3>
              <BsStarFill />
              <span>2</span>
            </h3>

            <div className="rat-l">
              <div className="rat-l1" style={{
                right: `${100 -(data1[0]?.two/totel_rat)*100}%`
              }}></div>
            </div>
            <div className="rat-no">{data1[0]?.two} <span> ratings</span></div>
          </div>
          <div className="rat-line">
            <h3>
              <BsStarFill />
              <span>1</span>
            </h3>
            <div className="rat-l">
              <div className="rat-l1" style={{
                right: `${100 -(data1[0]?.one/totel_rat)*100}%`
              }}></div>
            </div>
            <div className="rat-no">{data1[0]?.one} <span>ratings</span></div>
          </div>
        </div>
      </div>}
      
    </>
  );
};

export default Hot5;
