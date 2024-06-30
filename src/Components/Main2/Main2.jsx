import React from "react";
import "./Main2.css";
import icon from "../../assets/icon.png";
const Main2 = () => {
  return (
    <div className="main2">
      <div className="circle"></div>
      <p className="para">
        Store's Your Appointments , Set up Reminders And
      </p>
      <p className="para3"> Chat with Chatbot for any queries.</p> <br /> <br />
      <p className="para2">MediLock's Health WorkFlow</p> <br />

      <div className="workflow">
        <img src={icon} alt="" />
        <div className="line"></div>
      </div>

      <div className="workflow2">
        <img src={icon} alt="" />
        <div className="line"></div>
      </div>

      <div className="workflow3">
        <img src={icon} alt="" />
        <div className="line"></div>
      </div>

      <div className="workflow4">
        <img src={icon} alt="" />
        <div className="line"></div>
      </div>
      <div className="last">
        <img src={icon} alt="" className="last" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <div className="first">
          <p className="heading">Start Using Map My Health</p>
          <br />
          <p className="text">Log-in/Register</p>
        </div>
        <div className="second">
          <p className="heading">Appointment's </p> <br />
          <p className="text">
            - Set your schedule <br />
            - History of All Appointments <br />- Real Time Updates
          </p>
        </div>

        <div className="third">
          <p className="heading">Personal AI Assistant</p> <br />
          <p className="text">
            - 24/7 Availability <br />
            - Efficieny and Speed <br />- Healthcare
          </p>
        </div>

        <div className="fourth">
          <p className="heading">Reminder's</p> <br />
          <p className="text">
            - Set reminders
            <br />
            - Get notifications
            <br />
            - Manage schedule
          </p>
        </div>
        <div className="fifth">
        <p className="heading">Privacy & Security</p> <br /> <br />
        <div className="text">Your Data Security is our Responsibility</div>

        </div>
      </div>

    </div>
  );
};

export default Main2;
