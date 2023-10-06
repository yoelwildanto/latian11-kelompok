// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import axios from "axios";
 

function Navbar() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUserCount(response.data.length);
    });
  }, []);

  return (
    <nav>
      <div>Logo</div>
      <div className="user-count">Number of Users: {userCount}</div>
    </nav>
  );
}

export default Navbar;
