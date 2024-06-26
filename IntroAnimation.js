import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import './intro.css'; // Add custom styles if needed
import introSound from '../assets/intro-sound.mp3'; // Adjust path as necessary
import TypingAnimation from './TypingAnimation';
// Import images
import img13res from '../images/13res.jpg';
import imgOkja from '../images/Okja.png';
import imgGlow from '../images/glow.jpg';
import img13th from '../images/13th.jpg';
import imgNone from '../images/none.jpg';
import imgPunisher from '../images/punisher.jpg';
import imgBridges from '../images/bridges.jpg';
import imgCrown from '../images/crown.jpg';
import imgCopy from '../images/copy.jpg';
import imgRiver from '../images/river.jpg';



const IntroAnimation = () => {
  const audioRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setAnimationStarted(true);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (animationStarted && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, [animationStarted]);
  const texts = ["I am Yuvika Singh", " I am an aspiring software developer", "I am a web developer."];
  return (
    <div className="main-container">
      <div className="intro-container">
        <audio ref={audioRef} src={introSound} />
        <div className="titleWrapper">
          YUVIKA 
          <br />
          SINGH 
        </div>
        
        <div className="box">
          <TypingAnimation texts={texts} />
        
        </div>
        <div className="button-container">
        <Link to="/profile">
            <button className="btn btn-play">Play</button></Link>
        
          <Link to="/resume" >
          <button className="btn btn-more-info">More Info</button>
          </Link>
         
         
           
        </div>
      </div>
      <div className="content-container">
        <div className="top-shows">
          <h2>Top 10 Shows on Netflix</h2>
         
          
        </div>
        <div className="movies-container">
          <div className="row">
            <div className="movie-box" style={{ backgroundImage: `url(${img13res})` }}>Stranger Things</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgOkja})` }}>Okja</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgGlow})` }}>Glow</div>
            <div className="movie-box" style={{ backgroundImage: `url(${img13th})` }}>Friday the 13th</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgNone})` }}>Master of None</div>
          </div>
          <div className="row">
            <div className="movie-box" style={{ backgroundImage: `url(${imgPunisher})` }}>Punisher</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgBridges})` }}>Bridgerton</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgCrown})` }}>The Crown</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgCopy})` }}>Netflix Originals</div>
            <div className="movie-box" style={{ backgroundImage: `url(${imgRiver})` }}>Riverdale</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
