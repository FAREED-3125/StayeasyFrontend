import React from 'react'
import './hotel3.css'
const RoomsHot = ({resData,dataOffer}) => {
    
  return (
    <div className="room-container">
      <div className="ro-head">
        <h4>Room Selection</h4>
      </div>
      {resData ? <div className='room-cont'> {
        resData.map((room) => (
          <div className="room-de" key={room._id}>
            <div className="room-img"  >
           {room?.photos.map((img,index1) =>(
              <img  src={img} key={index1} alt="roomsImage" />
              ) )}
            </div>
            <div className="room-de2">
              <div className="room-de-1"><p>{room.type}</p>
              <p>Price: ₹<span>{Math.round(room.price - ((room.price * dataOffer)/100))}</span> <span>{room.price}</span> </p></div>
              <div className="ro-des">
                {room.desc}
              </div>
              <div className="ro-btn btn btn-primary">Check Availabilty</div>
            </div>
          </div>
        ))
      }</div> : <>
      <div className='ro-head'>
       <h4>No Rooms Found</h4></div>
        </>}
    </div>
  )
}

export default RoomsHot