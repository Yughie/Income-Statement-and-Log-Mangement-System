import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Login from './components/Login.jsx';
import LogoSection from './components/LogoSection.jsx';
import Dashboard from './components/Dashboard.jsx';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"


function App() {
  //const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      <Router>
        <Routes>
        <Route
            path="/"
            element={
              <>
                <LogoSection />
                <Login />
              </>
            }
          />
          
          <Route
            path="/dashboard"
            element={
             
                <Dashboard />

            }
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
