import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>About</Link>
      <Link to="/contact" style={{ color: "white", marginRight: "15px" }}>Kontak</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
}
