import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
