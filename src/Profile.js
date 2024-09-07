import React from 'react';
import './Profile.css';

//TODOS: Crop main image, add interactivity
function Profile() {
  return (
    <div className="Profile-container">
      <h1 classname="Profile-title"> Hello! I'm Brady Deschamps</h1>
      <div classname="Profile-content">
      <img src={`${process.env.PUBLIC_URL}/Profilephoto.jpg`} alt="Profile" className="Profile-picture" />

      <div className="Profile-details">

        
        <h2>About Me</h2>
        <p>Hello! I'm Brady Deschamps, a student at the ASU Barett Honors College with a passion for computer science and mathematics. <br></br> I have experience in various languages including:
         <br></br><ul><li>Java</li><li>Python</li><li>Javascript</li><li>React</li><li>Django</li>
            </ul> <br></br>
            Additionally, I am familiar with multiple platforms including:<ul><li>VSCode</li><li>Pycharm</li><li>Android Studio</li></ul> <br></br>I am currently an intern at 7Stalks Consulting LLC under Steven Klass where I mainly work with Python and Django.</p>
        <h2>Contact</h2>
        <ul>
            <li>Email: brady.d.deschamps@gmail.com</li>
            <li>LinkedIn: <a href="www.linkedin.com/in/brady-d-deschamps">Brady Deschamps</a></li> </ul>

      </div>
      <div classname="Profile-picture">
       <img src={`${process.env.PUBLIC_URL}/Profilephoto.jpg`} alt="Profile" />

      </div>
    </div>
    </div>
  );
}

export default Profile;