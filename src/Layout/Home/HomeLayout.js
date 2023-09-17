import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Mobilenva from "../../Components/MobileNAvbar/Mobilenva";
import './Home.css'

const HomeLayout = () => (
  <div className="home-container" style={{
    
  }}>
    <Header />
    <main>
      <Outlet></Outlet>
    </main>
   <Mobilenva/>
  
  </div>
);

export default HomeLayout;
