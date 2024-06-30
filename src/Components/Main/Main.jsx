import React from 'react';
import "./Main.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Main2 from '../Main2/Main2';
import About from '../About/About';
import ChatBot from '../ChatBot/ChatBot';

function Main() {
  const [text] = useTypewriter({
    words: [' medical history, our trusted vault."', ' health, your privacy, our commitment."'],
    loop: {},
  });
 

  
  return (
    <div className="main">
      <div className="circle"></div>
      <h1 className="texty">
        "Your {'  '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {text}
        </span>
        <Cursor />
        
      </h1>
      <img src='https://www.officepracticum.com/wp-content/uploads/2016/02/EHR-Implementation-Blog-Sept-2023.png' alt="" className="mainimg" />
      <div className="circle2"></div>
      <div>
      <div className="main">
      <div className="circle"></div>
      <h1 className="texty">
        "Your {'  '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {text}
        </span>
        <Cursor />
        
      </h1>
      <img src='https://www.officepracticum.com/wp-content/uploads/2016/02/EHR-Implementation-Blog-Sept-2023.png' alt="" className="mainimg" />
      <div className="circle2"></div>
      
    </div>
    <div>
    <Main2/>
    </div>
    <div>
      <About/>
    </div>
      </div>
      <ChatBot/>
    </div>
  );
}

export default Main;