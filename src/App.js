// src/App.js
import React from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import UserRegistration from "./components/UserRegistration";
import Navbar from "./components/NavBar";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="data" element={<UserTable />}/>
      <Route path="/" element={<UserRegistration />}/>
      </Routes>
    </div>
  );
}

export default App;
