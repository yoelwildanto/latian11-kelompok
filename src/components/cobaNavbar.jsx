import React from "react"
// import {FaBars, FaTimes} from "react-icons/fa"
import { useNavigate } from "react-router-dom";


const CobaNavbar = () => {
// const NavRef = useRef();
// const showNavBar = () => {
//     NavRef.current.classList.toggle("responsive-nav");

    const navigate = useNavigate();
    const handleToGoRegister = () => {
        navigate('/register');
      };
      const handleToGoLogin = () => {
        navigate('/login');
      };

  return (
    <header>
            <h3>Logo</h3>
            {/* <nav className="LoginRegis" > */}
                <div className="navItem">
                <button onClick={handleToGoLogin}>Login</button>
                <button onClick={handleToGoRegister}>Register</button>
                </div>
                {/* <button className="nav-btn close-btn" onClick={showNavBar}>
                <FaTimes/>
                </button> */}
            {/* </nav> */}
            {/* <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button> */}
        </header>
  )
}

export default CobaNavbar
