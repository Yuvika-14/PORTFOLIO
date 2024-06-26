import React from 'react'
import i1 from '../images/c++.png';
import i2 from '../images/Python.png';
import i3 from '../images/java.png';
import i4 from '../images/html.png';
import i5 from '../images/css.jpg';
import i6 from '../images/JavaScript.png';
import i7 from '../images/react.png';
import i8 from '../images/next.jpg';
import i9 from '../images/node.png';
import i10 from '../images/mongo.png';
import  "./res.css";
const Resume = () => {
  return (
    <div className="all">
      
      <div className="head">
        Hi,I'm Yuvika Singh.

      </div>
      <div className="download">

       <a href = "https://drive.google.com/file/d/1nbQedycmt9NO1aBY-65Tw2jcyKTGDVu5/view?usp=sharing">
            <button>Download my resume</button>
        </a>
      </div>
      <div className="intro">
        I am Yuvika Singh ,a 20 year old programmer
       who has solved more than 450 question letcode and geeks for geeks.
       <br></br>
       I am an aspiring software engineer.
       
        I a full stack developer.Like to make 3D websites. 

      </div>
      <br></br>
      <br></br>
      <br>
      </br>
      <div className="tech-container">
      <div className="tech-track">
        <img src={i1} alt="MongoDB" className="tech-logo" />
        <img src={i2} alt="MongoDB" className="tech-logo" />
        <img src={i3} alt="MongoDB" className="tech-logo" />
        <img src={i4} alt="MongoDB" className="tech-logo" />
        <img src={i5} alt="MongoDB" className="tech-logo" />
        <img src={i6} alt="MongoDB" className="tech-logo" />
        <img src={i7} alt="MongoDB" className="tech-logo" />
        <img src={i8} alt="MongoDB" className="tech-logo" />
        <img src={i9} alt="MongoDB" className="tech-logo" />
        <img src={i10} alt="MongoDB" className="tech-logo" />
        
      </div>
    </div>
    </div>
    )
}

export default Resume;
