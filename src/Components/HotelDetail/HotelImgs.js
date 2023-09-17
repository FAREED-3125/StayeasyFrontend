import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const HotelImgs = ({ data, loading }) => {
  const navigate = useNavigate();
  const [ImgIndex, setImgIndex] = useState(0);
  return (
    <>
    {
      !loading ? <>  <div className="hotel-images">
      <div className="back-arr" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </div>
    <div className="left-arr" onClick={() => {
        if(ImgIndex === 0) setImgIndex(data.photos.length - 1)
        else{
      setImgIndex(ps => ps - 1)
      }
      }} >
       <AiOutlineLeftCircle/>
      </div>
      <div className="right-arr"  onClick={() => {     
      setImgIndex(ps => (ps + 1)%data.photos.length)
      }}>
        <AiOutlineRightCircle />
      </div>
      {data.photos ? (
    <> <img src={data.photos[ImgIndex]} alt="HotelImages" />
     {data.photos.length > 1 && <img src={data.photos[(ImgIndex+1)%data.photos.length]} alt="HotelImages" />}</> 
      ) : "no Image"}
    </div></> :
    "no Imag eFound"
    }</>
  
  );
};

export default HotelImgs;
