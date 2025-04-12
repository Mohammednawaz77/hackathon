import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Issues from "./pages/Issues";
import Legislation from "./pages/Legislation";
import Vote from "./pages/Vote";
import Organize from "./pages/Organize";
import Impact from "./pages/Impact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/organize" element={<Organize />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
