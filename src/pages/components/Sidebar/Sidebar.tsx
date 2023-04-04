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
        <article className="navbar__list-row">
          <HomeRoundedIcon className="navbar__list__listItem-icon" />
          <a href="#Home"><li className="navbar__list__listItem">Home</li></a>
        </article>
        <article className="navbar__list-row">
          <InfoRoundedIcon className="navbar__list__listItem-icon" />
          <a href="#About"><li className="navbar__list__listItem">Sobre mim</li></a>
        </article>
        <article className="navbar__list-row">
          <ComputerRoundedIcon className="navbar__list__listItem-icon" />
          <a href="#Technologie"><li className="navbar__list__listItem">Tecnologias</li></a>
        </article>
        <article className="navbar__list-row">
          <ShareRoundedIcon className="navbar__list__listItem-icon" />
          <a href="#Midias"><li className="navbar__list__listItem">Redes sociais</li></a>
        </article>
      </ul>
    </nav>
  );
}

export default Sidebar;