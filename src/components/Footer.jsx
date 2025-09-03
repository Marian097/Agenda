import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>📱 Agenda Telefonică &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
