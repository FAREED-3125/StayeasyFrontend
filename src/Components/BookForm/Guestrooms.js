// IMPORT SECTION
import React, { useContext } from 'react'
import { BookFormContext } from './BookForm';
// =======================================================================================

const Guestrooms = () => {
  const {openrg,setRooms,rooms,setChildren,children,setGuest,adults,setAdults,setOpenrg,form2Reset} = useContext(BookFormContext)
  return (
    <div
              className="input-Guest-childrens"
              style={{
                display: openrg ? "block" : "none",
              }}
            >
              <div className="form-inputs">
                <label htmlFor="rooms">Rooms:</label>
                <div className="input-rooms input-inner">
                  <div
                    className="inner-btn"
                    onClick={() => {
                      setRooms((ps) => Number(ps) + 1);
                    }}
                  >
                    +
                  </div>
                  <h4>{rooms}</h4>
                  <div
                    className="inner-btn"
                    onClick={() => {
                      if (rooms !== 0) {
                        setRooms((ps) => Number(ps) - 1);
                      } else {
                        setRooms(0);
                      }
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="form-inputs">
                <label htmlFor="adults">Adults:</label>
                <div className="input-adult input-inner">
                  <div
                    className="inner-btn"
                    onClick={() => {
                      setAdults((ps) => Number(ps) + 1);
                    }}
                  >
                    +
                  </div>
                  <h4>{adults}</h4>
                  <div
                    className="inner-btn"
                    onClick={() => {
                      if (adults !== 0) {
                        setAdults((ps) => Number(ps) - 1);
                      } else {
                        setAdults(0);
                      }
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="form-inputs">
                <label htmlFor="childrens">Childrens:</label>
                <div className="input-children input-inner">
                  <div
                    className="inner-btn"
                    onClick={() => {
                      setChildren((ps) => Number(ps) + 1);
                    }}
                  >
                    +
                  </div>
                  <h4>{children}</h4>
                  <div
                    className="inner-btn"
                    onClick={() => {
                      if (children !== 0) {
                        setChildren((ps) => Number(ps) - 1);
                      } else {
                        setChildren(0);
                      }
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="submit-reset-input">
                <div
                  className=" btn-second sub"
                  style={{
                    color: "var(--p-color)",
                  }}
                  onClick={() => setOpenrg((ps) => !ps)}
                >
                  Submit
                </div>
                <div
                  className="btn-primary sub"
                  style={{
                    color: "var(--s-color)",
                  }}
                  onClick={form2Reset}
                >
                  Reset
                </div>
              </div>
            </div>
  )
}

export default Guestrooms