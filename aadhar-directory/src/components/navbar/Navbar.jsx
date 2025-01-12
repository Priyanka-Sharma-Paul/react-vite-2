import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
  
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <div className="navbar">
        <h3>Priyanshu Choudhary Directory App</h3>
      </div>
      <div className="navigators">
        <button className="navigator-btn" onClick={() => navigate("/")}>
          Add New Person
        </button>
        <button className="navigator-btn" onClick={() => navigate("/retrieve")}>
          Retrieve Infromation
        </button>
      </div>
      </>
  )
}

export default Navbar
