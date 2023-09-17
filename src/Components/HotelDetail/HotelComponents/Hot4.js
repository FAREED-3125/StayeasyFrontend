import React from "react";

import { TbAirConditioning } from "react-icons/tb";
import { MdFoodBank } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import RoomsHot from "./RoomsHot";

const Hot4 = ({ data ,rdata}) => {
  return (
    <>
      <div className="spe-cont">
        <h4 className="hot-spe">Facilities:</h4>
        <ul className="hot-ul">
          {data.freefood ? (
            <li>
              <MdFoodBank />
              <span>Free Food</span>
            </li>
          ) : (
            <></>
          )}
          {data.freecancellation ? (
            <li>
              <FaMoneyCheck />
              <span>Free Cancellation</span>
            </li>
          ) : (
            <></>
          )}
          {data.petallowed ? (
            <li>
              <FaDog />
              <span>Pets allowed</span>
            </li>
          ) : (
            <></>
          )}
          {data.ac ? (
            <li>
              <TbAirConditioning />
              <span>Air Conditioner Facilities</span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <RoomsHot resData={rdata} dataOffer={data.offer} />
    </>
  );
};

export default Hot4;
