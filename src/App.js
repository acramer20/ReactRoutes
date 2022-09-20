import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Kombucha from "./Kombucha";
import Reeses from "./Reeses";
import AlmondBar from "./AlmondBar";

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<VendingMachine />} />
    <Route path="/kombucha" element={<Kombucha />} />
    <Route path="/reeses" element={<Reeses />} />
    <Route path="/almond_bar" element={<AlmondBar />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
