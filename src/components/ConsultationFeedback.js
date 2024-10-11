import React, { useState } from 'react';

const ConsultationFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    doctorName: '',
    effectiveness: 0,
    communication: 0,
    comments: '',
  });

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(feedbackData);
  };

  return (
    <form className="max-w-lg mx-auto bg-white p-8 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Consultation Feedback</h2>
      <div className="mb-4">
        <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
        <input
          type="text"
          name="doctorName"
          id="doctorName"
          value={feedbackData.doctorName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Effectiveness (1-5)</label>
        <input
          type="number"
          name="effectiveness"
          value={feedbackData.effectiveness}
          onChange={handleChange}
          min="1"
          max="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Communication (1-5)</label>
        <input
          type="number"
          name="communication"
          value={feedbackData.communication}
          onChange={handleChange}
          min="1"
          max="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
        <textarea
          name="comments"
          id="comments"
          value={feedbackData.comments}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit Feedback
      </button>
    </form>
  );
};

export default ConsultationFeedback;
