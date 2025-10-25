import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpicLookup from "./pages/epicLookup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EpicLookup />} />
      </Routes>
    </Router>
  );
}

export default App;
