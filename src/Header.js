import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Brady Deschamps</h1>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
        <button className="header-button">View Resume</button>
      </a>
    </header>
  );
}

export default Header;