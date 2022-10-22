import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../routes/Home";
import Route1 from "../routes/Route1";
import Route2 from "../routes/Route2";
import Route3 from "../routes/Route3";
const Main = ({ user }) => {
  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="route1" element={<Route1 />} />
        <Route path="route2" element={<Route2 />} />
        <Route path="route3" element={<Route3 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
