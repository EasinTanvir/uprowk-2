import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comnponents/Navbar";
import Login from "./comnponents/Login";
import Register from "./comnponents/Register";
import Dashboard from "./comnponents/Dashboard";
import About from "./comnponents/About";
import DashBoardLayout from "./comnponents/Dashboard/DashBoardLayout";

import CreatSorten from "./comnponents/Dashboard/CreatSorten";
import SortenUrlLists from "./comnponents/Dashboard/SortenUrlLists";
import Analytics from "./comnponents/Dashboard/Analytics";
import LandinPage from "./comnponents/LandinPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LandinPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="" element={<CreatSorten />} />
          <Route path="shorten-list" element={<SortenUrlLists />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
