import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import './ScholarshipForm.css';

function ScholarshipForm() {
  const [formData, setFormData] = useState({
    title: '',
    university: '',
    location: '',
    duration: '',
    acceptanceRate: '',
    mode: '',
    deadline: '',
    scholarships: '',
    type: '',
    image: '',
    website: '',
    course: '', // Changed to course
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Insert data into the 'Scholarships' table
      const { data, error } = await supabase
        .from('Scholarships')
        .insert([formData]);

      if (error) throw error;
      setMessage('Scholarship added successfully!');
      setFormData({
        title: '',
        university: '',
        location: '',
        duration: '',
        acceptanceRate: '',
        mode: '',
        deadline: '',
        scholarships: '',
        type: '',
        image: '',
        website: '',
        course: '', // Reset course field
      });
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="scholarship-form-container">
      <h2>Add Scholarship</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          value={formData.university}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <input
          type="number"
          name="acceptanceRate"
          placeholder="Acceptance Rate"
          value={formData.acceptanceRate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mode"
          placeholder="Mode"
          value={formData.mode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="deadline"
          placeholder="Deadline"
          value={formData.deadline}
          onChange={handleChange}
        />
        <input
          type="text"
          name="scholarships"
          placeholder="Scholarships"
          value={formData.scholarships}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
        {/* Add the new input field for course */}
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />
        <button type="submit">Add Scholarship</button>
      </form>
      {message && (
        <p className={message.includes('successfully') ? 'message' : 'error-message'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ScholarshipForm;