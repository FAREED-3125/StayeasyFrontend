import React, { useContext, useEffect, useState } from "react";
import { DeleteBookings, useBookings } from "../../hooks/useBookings";
import { AuthContextProvider } from "../../Context/AuthContext";
import format from "date-fns/format";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import "./bookings.css";
import Example from "../Loading/Loading";
import { Deleteroomnumber } from "../../hooks/useRooms";
const Booking = () => {
  const { authInfo } = useContext(AuthContextProvider);
  const user = authInfo?.user ? true : false;
  const { data, loading, err } =  useBookings(authInfo?.user?._id);

  const deleteBookingsfunc = (id, betdates, roomids) => {
    if (window.confirm("Are you sure you want to cancel")) {
      try {
        const { data, err } = DeleteBookings(id, authInfo?.user?._id);
        if (err) throw err;
        console.log(data);
        const { data: addrdata, err: addrerr } = Deleteroomnumber(
          roomids,
          betdates
        );
        if (addrerr) throw addrerr;
        console.log(addrdata);
        return location.reload();
      } catch (err) {
        console.log(err.message);
      }
    } else {
      return;
    }
  };

  return (
    <div className="booking-container">
      {user ? (
        loading ? (
          <>
            {" "}
            <Example
              width={"15px"}
              height={"15px"}
              width2={"100vw"}
              height2={"100dvh"}
            />
          </>
        ) : (
          data[0]?.bookings.length <= 0 ? <>  <div className="need-signin">
          <div className="book-no-icon">
            <MdOutlineDoNotDisturbOnTotalSilence />
          </div>
          <div className="no-bookings">
            No bookings
          </div>
        </div> </>
 :           <>
            {data[0]?.bookings.map((book, index) => (
              <div className="book-cont" key={index}>
                <h4>Name: {book.name}</h4>
                <p>
                  Email:{" "}
                  <span
                    style={{
                      color: "var(--g-color)",
                    }}
                  >
                    {book.email}
                  </span>
                </p>
                <p>
                  phone:{" "}
                  <span
                    style={{
                      color: "var(--g-color)",
                    }}
                  >
                    {" "}
                    {book.phonenumber}
                  </span>
                </p>
                <p>
                  guests:{" "}
                  <span
                    style={{
                      color: "var(--g-color)",
                    }}
                  >
                    {" "}
                    {book.guests}
                  </span>
                </p>
                <div className="booking-dates">
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Dates:{" "}
                  </p>
                  <p
                    style={{
                      color: "var(--s-color)",
                    }}
                  >
                    {book.fromdate}
                  </p>
                  <p>to</p>
                  <p
                    style={{
                      color: "var(--s-color)",
                    }}
                  >
                    {book.enddate}
                  </p>
                </div>
                <h5>
                  Booked date:{" "}
                  <span
                    style={{
                      color: "var(--s-color)",
                    }}
                  >
                    {format(new Date(book.createdAt), "dd-MM-yyyy")}
                  </span>
                </h5>

                <div
                  className="btn btn-primary"
                  style={{
                    color: "var(--s-color)",
                  }}
                  onClick={() =>
                    deleteBookingsfunc(book._id, book.betdates, book?.roomids)
                  }
                >
                  Cancel booking
                </div>
              </div>
            ))}
          </>
        )
      ) : (
        <div className="need-signin">
          <div className="book-no-icon">
            <MdOutlineDoNotDisturbOnTotalSilence />
          </div>
          <div className="no-bookings">
            No bookings,please Sign in or login First.
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
