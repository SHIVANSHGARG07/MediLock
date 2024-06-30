import React from "react";
import "./About.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="alag">
<div className="about">
      <div className="left">
        <p className="texy">
          MediLock is your go-to platform for scheduling meetings, <br />{" "}
          sending timely reminders, and safeguarding your data with top-notch
           security measures. Our intuitive interface allows you to easily
          book <br /> appointments, ensuring you never miss an important
          meeting. <br /> Join MediLock today and experience seamless, secure,
          and efficient meeting management!
        </p>
      </div>
      <div className="right">
        <h4>Discover</h4>
        <br />
        <div className="items">
          <li>Home</li>
          <li>News & Vlog</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
        </div>
      </div>
      <div className="lasty">
        <h4>Contact Us</h4>
        <br />
        <div className="items2">
          <li>
            S-2, 1st Floor, Okhla Industrial Area Phase - II, Delhi 110020
          </li> <br />
          <li><BsFillTelephoneFill /> +91-011-4054437</li>
          <li> <IoMdMail />   info@medilock.in
          </li>
        </div>
      </div>
    </div>
    <div className="footer">
      <p className="set">Stay Connected</p>
      <div className="icons">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />

      </div>
    </div>
    </div>
    
  );
};

export default About;
