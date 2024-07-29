import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h2>About Me</h2>
        <p>Hello! I'm Brady Deschamps, a student at the ASU Barett Honors College with a passion for computer science and mathematics. I have experience in various technologies including Java, Javascript, React, Django, and Python. I am currently an intern at 7Stalks Consulting LLC.</p>
        <h2>Contact</h2>
        <p>Email: brady.d.deschamps@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;