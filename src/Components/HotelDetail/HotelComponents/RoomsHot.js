import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import "./hotel3.css";
import "./hot4.css";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";
import { GrCheckboxSelected } from "react-icons/gr";
import { BookContextProvider, FormOpt } from "../../../Context/FormContext";

const RoomsHot = ({ resData, dataOffer }) => {
  const { bookInfo, dispatch } = useContext(BookContextProvider);
  const [selrooms, setselrooms] = useState(-1);
  const [roomnos, setroomnos] = useState([]);
  const [roomid,setroomid] = useState([])
  useEffect(() => {
    if (bookInfo.rooms == roomnos.length) {
      dispatch({
        type: FormOpt.UPDATE_SEARCH,
        payload: { roomnumber: roomnos,roomid: [...new Set(roomid)] },
      });
    }

    console.log(roomnos)
  }, [roomnos]);

  const roomaddfunc = (number,roid) => {
    if (roomnos.includes(number)) {
      undoRoomnumfunc(number); 
       const nweroomid = roomid.filter(id => id !== roid);
      setroomid(nweroomid);
    } else {
      setroomnos([...roomnos, number]);
      setroomid([...roomid,roid])
    }
  };

  const undoRoomnumfunc = (number,roid) => {
    const newRoomnos = roomnos.filter((r) => r !== number);
    setroomnos(newRoomnos);
  };
 console.log({
  roomid,
  roomnos
 })

  return (
    <div className="room-container">
      <div className="ro-head">
        <h4>Room Selection</h4>
      </div>
      {resData ? (
        <div className="room-cont">
          {resData.map((room, indexroom) => (
            <div
              className="room-de"
              style={{
                transition: "all .3s ease-in",
              }}
              key={room._id}
            >
              <div className="room-img">
                {room?.photos.map((img, index1) => (
                  <img src={img} key={index1} alt="roomsImage" />
                ))}
              </div>
              <div className="room-de2">
                <div className="room-de-1">
                  <p>{room.type}</p>
                  <p>
                    Price: ₹
                    <span>
                      {Math.round(room.price - (room.price * dataOffer) / 100)}
                    </span>{" "}
                    <span>{room.price}</span>{" "}
                  </p>
                </div>
                <div className="ro-des">{room.desc}</div>

                <div
                  className="ro-btn btn btn-primary"
                  style={{
                    width: selrooms === indexroom && "70px",
                    padding: selrooms === indexroom && ".2rem .5rem",
                    transition: "all .2s ease-in-out",
                  }}
                  onClick={() => {
                    setselrooms((ps) => {
                      if (ps === indexroom) return -1;
                      else return indexroom;
                    });
                  }}
                >
                  {selrooms === indexroom ? "close" : "Show rooms"}
                </div>

                {selrooms === indexroom && (
                  <div className="rooms-number-cont">
                    {room.Room_number.map((room1,index) =>
                      (
                        <div className="ro-num-cont" key={index}>
                          <div className="ro-number">
                            <span>Room no: </span>
                            <span>{room1.number}</span>
                          </div>
                          {bookInfo?.betDates.includes(...room1.unavailable) ? (
                            <div className="btn btn-unavailable">
                              <span>unavailable</span>{" "}
                              <span>on selected dates</span>
                            </div>
                          ) : (
                            <div
                              className="btn btn-select"
                              onClick={() => {
                                if (bookInfo?.rooms  > roomnos.length) {
                                  roomaddfunc(room1.number,room1._id);
                                }
                              }}
                            >
                              {roomnos.includes(room1.number) ? (
                                <GrCheckboxSelected />
                              ) : (
                                <MdOutlineAirlineSeatIndividualSuite />
                              )}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="ro-head">
            <h4>No Rooms Found</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomsHot;
