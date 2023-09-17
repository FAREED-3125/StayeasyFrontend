import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'
import { BsStarFill } from "react-icons/bs";
import Loading  from '../../Loading/Loading'

const Hot1 = ({data,rdata,rloading}) => {
  return (
    <div className="hot-de-1">
      <div className="rat-spe">
        <div className="spe-item" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "10px"
        }}>

       {rloading ? <>
       <Loading  width={"15px"} height={"15px"}/>
       </> : rdata.map((dat, index) => (
  <React.Fragment key={index}>
    {dat.price >= 7500 && (
      <div className="affd" key={index}>
        <p>Affordable</p>
      </div>
    )}
    {dat.price <= 3000 && (
      <div className="prem" key={index}>
        <p>Premium</p>
      </div>
    )}
  </React.Fragment>
))
}
        </div>
<div className="rating">
      <p>rating:</p>
      <div
        className="rating-box"
      >
      
        <BsStarFill />
        <span>{data.rating}</span>
      </div>
    </div>
      </div>
    <h3 className="hot-name">{data.name}</h3>
    <p className="hot-st">
      <FaLocationArrow/>
      {data.shortaddress || "Near Chennai Airport,300m from VR mall"}
    </p> 
     <p className="hot-sho2">
  {data.address ||
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et?"}
</p>
    
    </div>
  )
}

export default Hot1