import "./index.css";
import "./index";
import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Review from "./components/Review";
import Navbar from "./components/Navbar";
import SecondNav from "./components/SecondNav";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import CheckOut from "./components/CheckOut";
import SignIn from "./components/SignIn";

function App() {
  return (
     <div className="app-container">

      <Navbar />
      <SecondNav />

      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Hero />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Review" element={<Review />} />
        <Route path="CheckOut" element={<CheckOut />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </div>
 
  );
}

export default App;