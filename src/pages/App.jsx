import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartMenu from "./StartMenu";
import Game from "./Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
