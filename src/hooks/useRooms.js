import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fetch_url } from "./useFetch";


export const useRooms = (body) => {
  const [rdata, setData] = useState([]);
  const [rloading, setLoading] = useState(false);
  const [rerr, seterr] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
if(body){
  try {
    const response = await axios.post(`${Fetch_url}/Rooms/FindRooms`,body);
    setData(response.data)
  } catch (err) {
    seterr(err);
    console.log(err);
  } finally {
    setLoading(false);
  }

}
    };
   fetchData();
  }, [body]);
  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${Fetch_url}/Rooms/FindRooms`,body);
      if (!response.ok) throw Error(response.error);
      setData(response.data);
    } catch (err) {
      seterr(err);
    } finally {
      setLoading(false);
    }
  };
  return { rdata, rloading, rerr };
};

export const UpdateRoomnumber = async(roomid,unavailable) => {


  try{
  
    const response = await axios.put(`${Fetch_url}/Rooms/upRoomnumber`,{unavailable,roomid})
     console.log(response.data)
  }catch(err){
    console.log(err);
    return {data: null,err: "Updation failed"}
  }

  return {data: "Update success",err: null}
}

export const Deleteroomnumber = async(roomid,unavailable) => {


  try{
   
    const response = await axios.put(`${Fetch_url}/Rooms/deleteRoomno`,{unavailable,roomid})
   console.log(response.data);
   return {data: response.data,err: null}
  }catch(err){
  
    console.log(err);
    return {data: null,err: err.message}
  }
 
}
