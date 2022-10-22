import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../routes/Home";
import Route1 from "../routes/Route1";
import Route2 from "../routes/Route2";
import Route3 from "../routes/Route3";
import MemberRoute from "../routes/MemberRoute";
import About from "../routes/About";
const Main = ({ user, toggleUser }) => {
  return (
    <div>
      <NavBar user={user} toggleUser={toggleUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="route1" element={<Route1 />} />
        <Route path="route2" element={<Route2 />} />
        <Route path="route3" element={<Route3 />} />
        {user ? <Route path="memberRoute" element={<MemberRoute />} /> : <></>}
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
