import React from 'react';

const DoctorListing = () => {
  const doctors = [
    { id: 1, name: 'Dr. Alice Johnson', specialty: 'Cardiologist', rating: 4.9 },
    { id: 2, name: 'Dr. Bob Smith', specialty: 'Dermatologist', rating: 4.8 },
    { id: 3, name: 'Dr. Charlie Brown', specialty: 'Pediatrician', rating: 4.7 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-yellow-500">Rating: {doctor.rating} ★</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;
