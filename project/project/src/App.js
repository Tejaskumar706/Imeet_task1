import React from "react";
import Navebar from "./components/Navebar"
import Hero  from "./components/Hero";
import Analytics from "./components/Analytics";
import Card from "./components/Cards";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Compant from "./components/Compant";



function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compant" element={<Compant />} />

          
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
