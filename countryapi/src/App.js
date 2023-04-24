import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<SingleCountry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
