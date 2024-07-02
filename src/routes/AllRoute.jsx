import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import AllNotes from "../pages/AllNotes";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/notes" element={<AllNotes/>}></Route>
      
    </Routes>
  );
};

export default AllRoute;
