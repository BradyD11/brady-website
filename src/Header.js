import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <button className="nav-button">About me</button>
        <button className="nav-button">Experience</button>
        <button className="nav-button">Accomplishments</button>
        <button className="nav-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;