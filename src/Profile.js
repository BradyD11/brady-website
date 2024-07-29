import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-details">
        <h2>About Me</h2>
        <p>Hello! I'm Brady Deschamps, a student at the ASU Barett Honors College with a passion for computer science and mathematics. <br></br> I have experience in various technologies including:
         <br></br><ul><li>Java</li><li>Python</li><li>Javascript</li><li>React</li><li>Django</li>
            </ul> <br></br>
            Additionally, I am familiar with multiple platforms including:<ul><li>VSCode</li><li>Pycharm</li><li>Android Studio</li></ul> <br></br>I am currently an intern at 7Stalks Consulting LLC under Steven Klass.</p>
        <h2>Contact</h2>
        <ul>
            <li>Email: brady.d.deschamps@gmail.com</li>
            <li>LinkedIn: <a href="www.linkedin.com/in/brady-d-deschamps">Brady Deschamps</a></li> </ul>

      </div>
      <img src={`${process.env.PUBLIC_URL}/Profilephoto.jpg`} alt="Profile" className="profile-picture" />
    </div>
  );
}

export default Profile;