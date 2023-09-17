// IMPORT SECTION
import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { LuHotel } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
// =======================================================================================

const Menu = ({ isMenu, setMenu }) => {
  return (
    <div className="menu-container">
      <div className="display-menus">
        <NavLink className="linksm" to="/">
          <GrHomeRounded />
          <p>Home</p>
        </NavLink>
        <NavLink className="linksm" to="/Booking">
          <LuHotel />
          <p>Bookings</p>
        </NavLink>
        <NavLink className="linksm" to="/account">
          {" "}
          <VscAccount />
          <p>Account</p>
        </NavLink>
        <a href="tel:1234567890" className="linksm" to="/account">
          {" "}
          <FiPhoneCall />
          <p>Call us</p>
        </a>
      </div>
    </div>
  );
};

export default Menu;
