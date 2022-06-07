import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import FirstPhase from "./Pages/FirstPhase/FirstPhase";
import "./App.css";

const App = (props) => {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="first-phase" element={<FirstPhase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
