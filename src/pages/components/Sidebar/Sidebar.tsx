import { useState, useEffect } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

const Sidebar = () => {
  return (
    <nav className="navbar" id="navbar">
      <h2>Matt Dev</h2>
      <ul className="navbar__list">
        <li className="navbar__list__listItem">
          <a href="#Home">
            <div className="row">
              <i className="bi bi-house-door-fill" style={{ color: "#CBE4DE", fontSize: "22px" }}></i>
              <span>Home</span>
            </div>
          </a>
        </li>
        <li className="navbar__list__listItem">
          <a href="#About">
            <div className="row">
              <i className="bi bi-file-person-fill" style={{ color: "#CBE4DE", fontSize: "22px" }}></i>
              <span>Sobre mim</span>
            </div>
          </a>
        </li>
        <li className="navbar__list__listItem">
          <a href="#Technologie">
            <div className="row">
              <i className="bi bi-braces-asterisk" style={{ color: "#CBE4DE", fontSize: "22px" }}></i>
              <span>Tecnologia</span>
            </div>
          </a>
        </li>
        <li className="navbar__list__listItem">
          <a href="#Midias">
            <div className="row">
              <i className="bi bi-share-fill" style={{ color: "#CBE4DE", fontSize: "22px" }}></i>
              <span>Contato</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;