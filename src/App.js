import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//COmponents imports
import { useFetch } from "./hooks/useFetch";
import HomeLayout from "./Layout/Home/HomeLayout";
import ErrorElement from "./Components/Error/ErrorElement";
import Search from "./Components/Search.js/Search";
import Frontpage from "./Layout/Frontpage";
import RegisterForm, { HandleRegisterFunc } from '../src/Components/Register/RegisterForm'
import Account from './Components/Account/Account'
import HotelDetails from "./Components/HotelDetail/HotelDetails";
import Booking from "./Components/Booking/Booking";
import SelectRooms from "./Components/SelRooms/SelectRooms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Frontpage />
      },{
        path: "/account",
        element: <Account />,
      },{
        path: "/booking",
        element: <Booking/>
      } ,
    ],
    errorElement: <ErrorElement />,
  },
  {
    path: "/Login",
    element: <RegisterForm/>,
    errorElement: <ErrorElement />,
  },
  {
    path: "/Signup",
    element:<RegisterForm/>,
    errorElement: <ErrorElement />,
  },
 ,{
    path: "/search",
    element: <Search />,
  },
  {
    path: '/hoteldetails/:id',
    element: <HotelDetails/>
  },
  {
    path:'/rooms',
    element: <SelectRooms/>
  }
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
