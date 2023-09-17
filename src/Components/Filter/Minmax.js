// IMPORT SECTION

import React, { useEffect, useRef } from 'react'
import './minmax.css'
import { set } from 'date-fns';
// =======================================================================================

const Minmax = ({
    min,max,setMin,setMax
}) => {
  useEffect(() => {
    if(min >= max) setMin(max - 1000);
    if(max  > 25000) setMax(25000);
    if(max <= 2000) setMax(2000)
    if(min < 0) setMin(0);
  },[min,max])
  return (
   <div className="minmax-container">
    <div className='min mm'>
        <h4>Min price:</h4>
        <input type="number" readOnly name='' className='input' value={min} onChange={(e)=> setMin(e.target.value)}/>
    </div>
    <div className="max mm" >
        <h4>Max price: </h4>
        <input type="number" readOnly name='' className='input' value={max} onChange={(e)=> setMax(e.target.value)}/>
    </div>

   
        <div className='slider'>
            <div className='progress' style={{
                left:`${Number(min) / 25000 * 100}%`,
                right: `${ 100 - ((Number(max)/ 25000) * 100) }%`
            }}>
            
            </div>   <div className="rangeinput">
            <input value={min} name="min" type="range" onChange={(e) => setMin(Number(e.target.value))} min={0} max={25000} step={1000}/>
            <input name="max"  value={max} type="range" onChange={(e) => setMax(Number(e.target.value))} min={0} max={25000} step={1000}/>
        </div>
        </div>

     

   </div>
  )
}

export default Minmax