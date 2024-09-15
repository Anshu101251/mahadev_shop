import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={index} />
    //   </Routes>
    // </BrowserRouter>
    <Home />
  );
}

export default App;
