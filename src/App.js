import React from "react";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/Index";
import InGame from "./Pages/InGame/Index";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inGame" element={<InGame />} />
      </Routes>
    </>
  );
}
