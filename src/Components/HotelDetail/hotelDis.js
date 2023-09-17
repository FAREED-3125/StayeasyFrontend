import React, { useEffect, useState } from "react";
import "./HotelComponents/hotel2.css";
import Filter2 from "../Filter/Filter2";
import Hot1 from "./HotelComponents/Hot1";
import Hot2 from "./HotelComponents/Hot2";
import Hot3 from "./HotelComponents/Hot3";
import Hot4 from "./HotelComponents/Hot4";
import Hot5 from "./HotelComponents/Hot5";
import Hot6 from "./HotelComponents/Hot6";
import HotPrice from "./HotelPrice/HotPrice";
import Footer from "./HotelComponents/Footer";
import { useRooms } from "../../hooks/useRooms";
import SelectRooms from "../SelRooms/SelectRooms";

const HotelDis = ({ setpay,data, state ,getDayDifference,getDatesBetween}) => {
  const [edit, setEdit] = useState(false);
  const [state1, setState] = useState(state);
  const {rdata,rloading,rerr} = useRooms(data?.rooms);

  // const {pdata,ploading,perr} = usePost('/FindRooms',data.rooms)
  // useEffect(()=>{
  //   const Func = async () => {
  //     const data2 = await data.rooms;
  //     console.log(data2);
  //     const data3 = await axios.post('/Rooms/FindRooms',data2)
  //     console.log({data3});
  //   }

  //   Func();
  // },[])

  return (
    <>
      <div className="hotel-dis">
        {data ? (
          <>
            <Hot1 data={data} rdata= {rdata} rloading={rloading}/>
            <Hot2 data={data} state1={state1} />
          </>
        ) : (
          "no Data"
        )}
        <Hot4 data={data} rdata={rdata}/>     <Hot3
          state1={state1}
          edit={edit}
          setEdit={setEdit}
          state={state}
          setState={setState}
          getDayDifference={getDayDifference}
          getDatesBetween={getDatesBetween} 
          />
        <HotPrice data={data} state1={state1} setpay={setpay}/>
        <Hot5 data={data} />
        <Hot6 data={data} />{" "}
     
      </div>  
       <Footer/>
       <SelectRooms/>
    </>
  );
};

export default HotelDis;
