import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./styles.css";

import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();

  const andjelikaPage = () => {
    // 👇️ navigate to /contacts
    navigate("/andjelika");
  };

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <NavLink to="/" className="navbar-brand">
          andjelika<span>.ai</span>
        </NavLink>
        <form class="d-flex">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="#nesto" className="link">
            About
          </NavLink>
          <Button content="Chat with Andjelika" onClick={andjelikaPage} />
        </form>
      </div>
    </nav>
  );
};

export default Header;
