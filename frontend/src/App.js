// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Trainers from "./components/Trainers/Trainers";
import Aboutus from "./components/Aboutus/Aboutus";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import axios from "axios";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Payment from "./components/Payment/Payment";
import RegistrationForm from "./components/registration/RegistrationForm";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/register" element={<RegistrationForm/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
