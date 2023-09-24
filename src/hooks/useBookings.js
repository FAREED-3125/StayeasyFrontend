import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fetch_url } from "./useFetch";
export const useBookings = (id) => {
 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, seterr] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${Fetch_url}/Bookings/getallbookings/${id}`);
        setData(response.data);
      } catch (err) {
        seterr(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { data, loading, err };
};

export const DeleteBookings = async (id, userid) => {
  try {
    const response = await axios.delete(
      `${Fetch_url}/Bookings/deletebooking/${id}/${userid}`
    );
  } catch (err) {
    console.log(err);
    return{data: null,err: Error("Error deleting")};
  }

  return{data: "Deletion Success",err: null};
};

export const createnewBookings = async (body, id) => {
  try {
    const response = await axios.post(`${Fetch_url}/Bookings/createnew/${id}`, body);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    return {data: null,err: Error("Error creating")};
  }
  return {data: "Creation Success",err: null};
};
