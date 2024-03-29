import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Login from "./components/Login.jsx";
import LogoSection from "./components/LogoSection.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Log from "./components/Log.jsx";
import IncomeStatement from "./components/IncomeStatement.jsx";
import Wages from "./components/Wages.jsx";
import CreateNewService from "./components/CreateNewService.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
              </>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/log" element={<Log />} />
          <Route path="/income-statement" element={<IncomeStatement />} />
          <Route path="/wages" element={<Wages />} />
          <Route path="/create-new-service" element={<CreateNewService />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
