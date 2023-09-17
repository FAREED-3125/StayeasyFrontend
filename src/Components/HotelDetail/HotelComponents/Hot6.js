import React, { useState, useRef, useContext, useEffect } from "react";
import { NavLink, useFetcher, useNavigate } from "react-router-dom";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { createReview, useReviews } from "../../../hooks/useReviews";
import { AuthContextProvider } from "../../../Context/AuthContext";
import { BsFillStarFill } from "react-icons/bs";
const Hot6 = ({ data }) => {
  const { authInfo } = useContext(AuthContextProvider);
  const { r1data, r1loading, r1err } = useReviews(data.reviews, 0);
  const [green, setGreen] = useState(false);
  const [red, setred] = useState(false);
  const navigate = useNavigate();
  const rev = useRef();
  const [req, setreq] = useState(false);
  const [rat, setRat] = useState(0);
  const [revs, setrevs] = useState(false);
  const validCreation = () => {
    if (!green && red) return true;
    if (!red && green) return true;
    if(rat === 0 ) return false;
    else return false;
  };
  const handlePost = () => {
    if (authInfo?.user) {
      if (validCreation()) {
        setreq(false);
        const revBody = {
          name: authInfo?.user?.username,
          happy: green ? true : false,
          unhappy: red ? true : false,
          review: rev.current.value,
          rating: rat,
        };
       
       const rps = createReview(revBody, data?._id);
        rev.current.value = "";
        setGreen(false);
        setred(false);
      } else {
        setreq(true);
      }
    } else {
      navigate("/Login");
    }
  };
  return (
    <>
      <div className="review">
        <h4>Reviews</h4>
        {!r1loading ? (
          <>
            {" "}
            {r1data.length > 0 ? (
              <>
              <div className="re-content" style={{
                height: !revs && "320px" ,
                paddingBottom: revs && "2rem",
                overflow: !revs ? "hidden" : "auto" 
              }}>
                {r1data.map((rev, index) => (
                  <div className="rev-cont" key={index}>
                    <div className="name-rat">
                      <div className="icon-n">
                        <BsPersonCircle /> <p>{rev?.name}</p>
                      </div>
                      <div className="icon-rat2">
                        {rev?.happy ? (
                          <BiHappyHeartEyes />
                        ) : (
                          <RiEmotionUnhappyLine />
                        )}{" "}
                        <p>rating: {rev?.rating}</p>
                      </div>
                    </div>
                    <div className="rev-content">{rev?.review}</div>
                  </div>
                ))}</div>
              </>
            ) : (
              <>
                <div className="rev-cont">
                  <p>No data Found</p>
                </div>
              </>
            )}
          </>
        ) : (
          "Loading..."
        )}

        <div className="see-rev btn-primary btn" onClick={() => setrevs(ps => !ps)}>{ !revs ? `Show all reviews` : "Hide all reviews"}</div>
      </div>

      <div className="post-review-container">
        <h4>Write a Review</h4>
        <div className="re-cont">
          <textarea
            ref={rev}
            name="review"
            placeholder="Write Your Opinion"
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <div className="re-bot">
            <div>
              <div
                onClick={() => {
                  setGreen((ps) => !ps);
                  setred(false);
                }}
                style={{
                  color: green ? "var(--gr-color)" : "var(--g-color) ",
                  backgroundColor: green && "var(-gr2-color)",
                  border: green
                    ? "2px solid var(--gr-color)"
                    : "2px solid var(--p-color)",
                }}
                className="post-link"
              >
                <BiHappyHeartEyes />
              </div>
              <div
                style={{
                  color: red ? "var(--r-color)" : "var(--g-color) ",
                  backgroundColor: red && "var(-r2-color)",
                  border: red
                    ? "2px solid var(--r-color)"
                    : "2px solid var(--p-color)",
                }}
                onClick={() => {
                  setred((ps) => !ps);
                  setGreen(false);
                }}
                className="post-link"
              >
                <RiEmotionUnhappyLine />
              </div>
            </div>
            <div className="rat-cont">
              <div
                className="rat-emo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "20px",
                  color: "var(--g-color)"
                }}
              >
                <div onClick={() => setRat(1)}>
                  {" "}
                  {rat >= 1 ? (
                    <>
                      <div
                        className="star-gold"
                        style={{
                          color: "gold",
                        }}
                      >
                        <BsFillStarFill />
                      </div>
                    </>
                  ) : (
                    <div className="star-s">
                      <BsFillStarFill />
                    </div>
                  )}
                </div>

                <div onClick={() => setRat(2)}>
                  {rat >= 2 ? (
                    <>
                      <div
                        className="star-gold"
                        style={{
                          color: "gold",
                        }}
                      >
                        <BsFillStarFill />
                      </div>
                    </>
                  ) : (
                    <div className="star-s">
                      <BsFillStarFill />
                    </div>
                  )}
                </div>

                <div onClick={() => setRat(3)}>
                  {rat >= 3 ? (
                    <>
                      <div
                        className="star-gold"
                        style={{
                          color: "gold",
                        }}
                      >
                        <BsFillStarFill />
                      </div>
                    </>
                  ) : (
                    <div className="star-s">
                      <BsFillStarFill />
                    </div>
                  )}
                </div>

                <div onClick={() => setRat(4)}>
                  {rat >= 4 ? (
                    <>
                      <div
                        className="star-gold"
                        style={{
                          color: "gold",
                        }}
                      >
                        <BsFillStarFill />
                      </div>
                    </>
                  ) : (
                    <div className="star-s">
                      <BsFillStarFill />
                    </div>
                  )}
                </div>

                <div onClick={() => setRat(5)}>
                  {rat >= 5 ? (
                    <>
                      <div
                        className="star-gold"
                        style={{
                          color: "gold",
                        }}
                      >
                        <BsFillStarFill />
                      </div>
                    </>
                  ) : (
                    <div className="star-s">
                      <BsFillStarFill />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="re-post " onClick={() => handlePost()}>
              <p>post</p>
            </div>
          </div>
          {req && (
            <div
              className="req"
              style={{
                fontSize: "14px",
                color: "var(--r-color)",
              }}
            >
              {" "}
              all the Fields are required.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hot6;
