// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import high from '../../assets/high.png';
// import { FaSignInAlt } from 'react-icons/fa';

// const Navbar = ({ setShowLogin }) => {
//   return (
//     <div className="navbar">
//       <div className="imagelogo">
//         <img src={high} alt="Logo" />
//       </div>
//       <div className="buttons">
//         <Link to="/">Home</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/appointments">My Appointments</Link>
//         <Link to="/reminders">Reminders</Link> {/* Add this line for reminders */}
//         <button className="signin" onClick={() => setShowLogin(true)}>
//           Sign In <FaSignInAlt />
//         </button>
//         <a href="#">
//           <img
//             src="https://mapmyhealth.in/assets/newwebsite/images/head-india-icon.png"
//             alt="India Icon"
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import high from '../../assets/high.png';
import { FaSignInAlt } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai'; // Import ChatBot icon from react-icons

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="navbar">
      <div className="imagelogo">
        <img src={high} alt="Logo" />
      </div>
      <div className="buttons">
        <Link to="/">Home</Link>
        {/* <Link to="/chatbot">
          <AiOutlineRobot /> ChatBot
        </Link>  */}
        {/* Link to ChatBot page with icon */}
        <Link to="/appointments">My Appointments</Link>
        <Link to="/reminders">Reminders</Link>
        <button className="signin" onClick={() => setShowLogin(true)}>
          Sign In <FaSignInAlt />
        </button>
        <a href="#">
          <img
            src="https://mapmyhealth.in/assets/newwebsite/images/head-india-icon.png"
            alt="India Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

