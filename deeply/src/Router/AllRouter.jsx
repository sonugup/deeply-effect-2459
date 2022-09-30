import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import About from "../Home/About";
import Home from "../Home/Home";
import Login from "../Home/Login"
import Customers from "./Customers.jsx"
import PrivateRoute from "./PrivetRouter";

const AllRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={
        
        <Login />
       
        }></Route>
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}></Route>
        <Route path="/customers" element={<PrivateRoute><Customers /></PrivateRoute>}></Route>
      </Routes>
    </>

  )
}

export default AllRouter;