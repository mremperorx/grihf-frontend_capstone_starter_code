import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/storage';

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]); // Array to hold doctors
  const [appointmentData, setAppointmentData] = useState({
    doctorId: '',
    date: '',
    time: '',
    notes: '',
  });

  // Load doctors from local storage or an API
  useEffect(() => {
    const storedDoctors = getLocalStorage('doctors'); // Assuming you store doctors' data in local storage
    if (storedDoctors) {
      setDoctors(storedDoctors);
    } else {
      // Fetch doctors from an API if not available in local storage
      fetchDoctors();
    }
  }, []);

  const fetchDoctors = async () => {
    // Replace with your API call to fetch doctors
    try {
      const response = await fetch('/api/doctors'); // Update this URL as needed
      const data = await response.json();
      setDoctors(data);
      // Store in local storage for future use
      localStorage.setItem('doctors', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send to an API
    console.log('Appointment booked:', appointmentData);
    // Clear form after submission
    setAppointmentData({
      doctorId: '',
      date: '',
      time: '',
      notes: '',
    });
  };

  return (
    <form className="max-w-lg mx-auto bg-white p-8 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>

      <div className="mb-4">
        <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700">Select Doctor</label>
        <select
          name="doctorId"
          id="doctorId"
          value={appointmentData.doctorId}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        >
          <option value="" disabled>Select a doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={appointmentData.date}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={appointmentData.time}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea
          name="notes"
          id="notes"
          value={appointmentData.notes}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows="3"
        />
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentBooking;
