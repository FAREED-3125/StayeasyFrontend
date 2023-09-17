// IMPORT SECTION

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider, AuthOpt } from "../../Context/AuthContext";
import './account.css'
import AccountDetails from "./AccountDetails";
// =======================================================================================

const Account = () => {
  const { authInfo,dispatch } = useContext(AuthContextProvider);
  const handleLogout = () => {
    if(window.confirm("Sure,You want logout.")){
      dispatch({type: AuthOpt.USER_LOGOUT})
    }
  }
  return (
    <div className="account-container">
      {!authInfo.user ? (<>
      <div className="log-cont">
        <h2>Create or Login Account</h2>
        <p>Welcome to our hotel booking app! To access exclusive deals and manage your bookings, please take a moment to create an account or log in to your existing one.</p>
      </div>
       <div className="register-cont">
          {" "}
          <Link
            className="login btn btn-second"
            style={{
              color: "var(--p-color)",
            }}
            to="/Login"
          >
            Login
          </Link>
          <Link
            to="/Login?value=signup"
            style={{
              color: "var(--s-color)",
            }}
            className="signup btn btn-primary"
          >
            Signup
          </Link>
         </div> </> ):
         <>
         <AccountDetails/>
         <div
            style={{
              color: "var(--p-color)",
            }}
            className="signup btn btn-second  logout-2"
            onClick={() => handleLogout()}
          >
            Logout
          </div>
        </>
      }
   
    </div>
  );
};

export default Account;
