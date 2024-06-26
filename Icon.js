import React from 'react'
import {Link} from  'react-router-dom';

import dev from "../images/dev.jpg";

import dev1 from "../images/machine-learning.jpg";
import dev2 from "../images/app.jpg";

import  './icon.css';
const Icon = () => {
  return (
    <div className="gate-container">
        
        <div className="centered-div-list-profiles-container" data-uia="profile-choices-page">
            <div className="list-profiles">
                <h1 className="profile-gate-label">Who's watching?</h1>
            </div>
            <div div className="profile-gate">
             
                <div className="boxes">

                <Link to="/webdev"  className="mov-box" style={{ backgroundImage: `url(${dev})` }}  ></Link>

                  
               <Link to="/machine"  className="mov-box" style={{ backgroundImage: `url(${dev1})` }}></Link>
                <Link to="/app"    className="mov-box" style={{ backgroundImage: `url(${dev2})` }}></Link>
        
                </div>
                
        


        </div>
        </div>
       
    </div>
              
  )
}

export default Icon;
