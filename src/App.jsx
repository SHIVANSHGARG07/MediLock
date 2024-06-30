import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Main2 from './Components/Main2/Main2';
import ChatBot from './Components/ChatBot/ChatBot';
import Appointments from './Components/Appointments/Appointments';
import Reminders from './Components/Reminders/Reminders'; // Import the ReminderComponent
import About from './Components/About/About';

const App = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [showReminder, setShowReminder] = useState(false); // State to manage showing ReminderComponent

  return (
    <Router>
      <div>
        {showlogin && <Login setShowLogin={setShowLogin} />}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main2" element={<Main2 />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/about" element={<About/>} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/reminders" element={<Reminders />} /> {/* Route for ReminderComponent */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


