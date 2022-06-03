import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
