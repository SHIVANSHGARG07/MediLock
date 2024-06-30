import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [reminderDetails, setReminderDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Load reminder details from localStorage
    const storedReminderDetails = JSON.parse(localStorage.getItem('reminderDetails'));
    if (storedReminderDetails) {
      setReminderDetails(storedReminderDetails);
    }
  }, []);

  const handleAddAppointment = () => {
    if (inputName.trim() !== '' && inputDescription.trim() !== '' && inputDate.trim() !== '') {
      const newAppointment = {
        name: inputName,
        description: inputDescription,
        date: inputDate,
        completed: false
      };
      setAppointments([...appointments, newAppointment]);
      sendNotification(newAppointment);
      setInputName('');
      setInputDescription('');
      setInputDate('');
    } else {
      console.log('Please fill in all fields.');
    }
  };

  const handleDeleteAppointment = (index) => {
    const newAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(newAppointments);
  };

  const handleToggleComplete = (index) => {
    const newAppointments = appointments.map((appointment, i) =>
      i === index ? { ...appointment, completed: !appointment.completed } : appointment
    );
    setAppointments(newAppointments);
  };

  const sendNotification = (appointment) => {
    if (reminderDetails.email) {
      console.log('Sending email to:', reminderDetails.email);
      emailjs.send('service_c21wi97', 'template_7lw7kbh', {
        to_name: reminderDetails.name,
        appointment_name: appointment.name,
        appointment_description: appointment.description,
        appointment_date: appointment.date,
        to_email: reminderDetails.email
      }, 'k6vuLXbfDMTWO-qnS')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
        }, (err) => {
          console.error('Failed to send email. Error:', err);
        });
    }
  };

  return (
    <div className='body'>
      <div className="appointments-container">
        <h1>Appointments</h1>
        <div className="input-group">
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            placeholder="Date"
          />
          <button onClick={handleAddAppointment}>Add</button>
        </div>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index} className={appointment.completed ? 'completed' : ''}>
              <div>
                <strong>{appointment.name}</strong>
                <p>{appointment.description}</p>
                <p>{appointment.date}</p>
              </div>
              <div>
                <button onClick={() => handleToggleComplete(index)}>
                  {appointment.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleDeleteAppointment(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;




