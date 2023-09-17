
import React,  { useEffect, useState } from "react";
import axios from "axios";
const usePost = (url, body) => {
  const [pdata, setData] = useState([]);
  const [ploading, setLoading] = useState(false);
  const [perr, seterr] = useState(null);
  console.log(url),
  console.log(body)

  useEffect(() => {
    const PostData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${url}`,body);
        setData(response.data);
      } catch (err) {
        seterr(err);
      } finally {
        setLoading(false);
      }
    };
    (async () => PostData())();
  }, [url]);
  if (!body) return;
  const rePost = async () => {
    setLoading(true);
    try {
      const response = await axios.post(url);
      if (!response.ok) throw Error(response.error);
      setData(response.data);
    } catch (err) {
      seterr(err);
    } finally {
      setLoading(false);
    }
  };
  return { pdata, ploading, perr };
};

export default usePost;
