import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import DoctorListing from './pages/DoctorListing';
import ConsultationFeedback from './components/ConsultationFeedback';
import ProfileManagement from './components/ProfileManagement';
import LandingPage from './components/LandingPage';
import AppointmentBooking from './components/AppointmentBooking';
import Notification from './components/Notification'; // Import Notification component

function App() {
  const [notification, setNotification] = useState({
    message: '',
    type: '',
    duration: 3000,
    isVisible: false,
  });

  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ message, type, duration, isVisible: true });
    setTimeout(() => {
      setNotification({ ...notification, isVisible: false });
    }, duration);
  };

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/doctors" element={<DoctorListing />} />
        <Route path="/feedback" element={<ConsultationFeedback />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route path="/bookanappointment" element={<AppointmentBooking showNotification={showNotification} />} />
      </Routes>
      
      {/* Notification Component */}
      {notification.isVisible && (
        <Notification
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={() => setNotification({ ...notification, isVisible: false })}
        />
      )}
    </div>
  );
}

export default App;
