import React from "react";
import Logo from "../Images/Image3.png"; // ✅ Import your image

export default function Header({ showLogin, setShowLogin }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "linear-gradient(90deg, #1a1a1a, #333)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* ✅ Logo Image */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "50px", // adjust size as needed
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* ✅ Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "25px",
          fontSize: "1rem",
        }}
      >
        {/* Add nav links here later if needed */}
      </nav>

      {/* ✅ Login Button */}
      <button
        onClick={() => setShowLogin(!showLogin)}
        style={{
          padding: "8px 18px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          background: showLogin ? "#ff4d6d" : "#ffc107",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {showLogin ? "Close" : "Login"}
      </button>
    </header>
  );
}
