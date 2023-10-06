// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import axios from "axios";
 

function Navbar() {
  const [userCount, setUserCount] = useState(0);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((response) => {
  //     setUserCount(response.data.length);
  //   });
  // }, []);

  useEffect(() => {
    updateCount();

    const intervalId = setInterval(updateCount, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const updateCount = () => {
    axios.get("http://localhost:3001/users").then((response) => {
      setUserCount(response.data.length);
    });
  };

  return (
    <nav className="navbar">
      <div>Logo</div>
      <div className="user-count">Number of Users: {userCount}</div>
    </nav>
  );
}

export default Navbar;
