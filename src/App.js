import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HotelList />} />
          <Route exact path="/hotel/:id" element={<HotelDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
