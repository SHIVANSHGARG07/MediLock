// // import React, { useState } from 'react';
// // import './Reminders.css';

// // const Reminders = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [enableReminder, setEnableReminder] = useState(false);

// //   const handleEnableReminder = () => {
// //     setEnableReminder(true);
// //     // Save reminder details to localStorage
// //     localStorage.setItem('reminderDetails', JSON.stringify({ name, email, phone }));
// //   };

// //   const handleDisableReminder = () => {
// //     setEnableReminder(false);
// //     // Remove reminder details from localStorage
// //     localStorage.removeItem('reminderDetails');
// //   };

// //   return (
// //     <div className="reminder-container">
// //       <h2>Reminders</h2>
// //       <div className="input-group">
// //         <label>Name:</label>
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           placeholder="Enter your name"
// //         />
// //       </div>
// //       <div className="input-group">
// //         <label>Email:</label>
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Enter your email"
// //         />
// //       </div>
// //       <div className="input-group">
// //         <label>Phone:</label>
// //         <input
// //           type="tel"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //           placeholder="Enter your phone number"
// //         />
// //       </div>
// //       <div className="button-group">
// //         {!enableReminder ? (
// //           <button onClick={handleEnableReminder}>Enable Reminders</button>
// //         ) : (
// //           <button onClick={handleDisableReminder}>Disable Reminders</button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Reminders;


// import React, { useState, useEffect } from 'react';
// import './Reminders.css';

// const Reminders = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [enableReminder, setEnableReminder] = useState(false);

//   useEffect(() => {
//     // Load stored reminder details
//     const storedDetails = JSON.parse(localStorage.getItem('reminderDetails'));
//     if (storedDetails) {
//       setName(storedDetails.name);
//       setEmail(storedDetails.email);
//       setPhone(storedDetails.phone);
//       setEnableReminder(true);
//     }
//   }, []);

//   const handleEnableReminder = () => {
//     const reminderDetails = { name, email, phone };
//     localStorage.setItem('reminderDetails', JSON.stringify(reminderDetails));
//     setEnableReminder(true);
//   };

//   const handleDisableReminder = () => {
//     localStorage.removeItem('reminderDetails');
//     setEnableReminder(false);
//   };

//   return (
//     <div className="reminder-container">
//       <h2>Reminders</h2>
//       <div className="input-group">
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="input-group">
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="input-group">
//         <label>Phone:</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Enter your phone number"
//         />
//       </div>
//       <div className="button-group">
//         {!enableReminder ? (
//           <button onClick={handleEnableReminder}>Enable Reminders</button>
//         ) : (
//           <button onClick={handleDisableReminder}>Disable Reminders</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reminders;

import React, { useState, useEffect } from 'react';
import './Reminders.css';

const Reminders = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enableReminder, setEnableReminder] = useState(false);

  useEffect(() => {
    // Load stored reminder details
    const storedDetails = JSON.parse(localStorage.getItem('reminderDetails'));
    if (storedDetails) {
      setName(storedDetails.name);
      setEmail(storedDetails.email);
      setPhone(storedDetails.phone);
      setEnableReminder(true);
    }
  }, []);

  const handleEnableReminder = () => {
    const reminderDetails = { name, email, phone };
    localStorage.setItem('reminderDetails', JSON.stringify(reminderDetails));
    setEnableReminder(true);
  };

  const handleDisableReminder = () => {
    localStorage.removeItem('reminderDetails');
    setEnableReminder(false);
  };

  return (
    <div className="reminder-container">
      <h2>Reminders</h2>
      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="button-group">
        {!enableReminder ? (
          <button onClick={handleEnableReminder}>Enable Reminders</button>
        ) : (
          <button onClick={handleDisableReminder}>Disable Reminders</button>
        )}
      </div>
    </div>
  );
};

export default Reminders;
