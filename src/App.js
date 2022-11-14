import React from "react";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/*  

        # TASK

        Points: 4

        Create 2 new routes
          1. Landing route will be / which renders LandingPage component (pages/LandingPage)
          2. /signup route will render Signup component (pages/Signup)
          3. /home route will render Home component (pages/Home)

      */}
    </div>
  );
};

export default App;
