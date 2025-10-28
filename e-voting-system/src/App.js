
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpicLookup from "./pages/epicLookup";

import Header from "./My components/Header";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/epic-lookup" element={<EpicLookup />} />
            <Route path="/" element={<EpicLookup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
