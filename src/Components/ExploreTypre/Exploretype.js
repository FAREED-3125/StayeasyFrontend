// IMPORT SECTION

import React,{useState} from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import './exploretype.css'
import { Link } from "react-router-dom";
// =======================================================================================

const Exploretype = () => {
  const { data, loading, err } = useFetch("Hotels/countByTypes");
  const explore = document.getElementById("explore");
  const [isDragging,setIsDrag] = useState(false);
  const typeimg = [
    "https://wallpapercave.com/wp/wp1846066.jpg",
    "https://th.bing.com/th/id/R.8e627feaf3b0de6d24e59aefb1f99680?rik=c75WGsM1Zx9xHw&riu=http%3a%2f%2fwww.cube3studio.com%2fwp-content%2fuploads%2f2015%2f04%2fApartments-in-Wakefield-Exterior-Dusk.jpg&ehk=wRe0NQWqR34TO1QAVV%2bV9pzlHXQtk52DlmjIlJGADD4%3d&risl=&pid=ImgRaw&r=0",
    "https://images.thrillophilia.com/image/upload/s--SV1dgLvG--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/311/815/original/1592023174_229648720.jpg.jpg?1592023174",
    "https://th.bing.com/th/id/OIP.o3M54rS1n1xED5UB1bvcPwHaE8?pid=ImgDet&rs=1",
    "https://photos.mandarinoriental.com/is/image/MandarinOriental/bodrum-villa-melisa-exterior?wid=4000&fmt=jpeg,rgb&qlt=63,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&icc=sRGB%20IEC61966-2.1&iccEmbed=1&printRes=72&fit=wrap&qlt=45,0"
  ]
  return (
    <div className="explore-type-container">
        <div className="explore-heading">
           <h3>Discover by type</h3>
           {loading && <Loading height={'20px'} width={'20px'} width2={"30px"} height2={'100%'} /> }
         

        </div>
      <div className="explore-type" id="explore" >
        {data ? data.map((type,index)=>(
           <Link className="type-container" key={index} style={{
           }} to='/search?city=chennai'>
            <div className="type-img">
                <img src={typeimg[index]} alt="" />
            </div>
               <div className="type-info">
                <h3 >{type.type}</h3>
                <p>{type.count} Properties</p>
                <h4>Explore {type.type} <span className="move">{">>"} </span></h4>
               </div>
           </Link>

        ) ) : "no data"}
      </div>
    </div>
  );
};

export default Exploretype;
