import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function ScholarshipList() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      // Fetch data from the 'Scholarships' table
      const { data, error } = await supabase.from('Scholarships').select('*');
      if (error) throw error;
      setScholarships(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching scholarships:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete a scholarship from the 'Scholarships' table
      const { error } = await supabase.from('Scholarships').delete().eq('id', id);
      if (error) throw error;
      fetchScholarships(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting scholarship:', error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Scholarship List</h2>
      <ul>
        {scholarships.map((scholarship) => (
          <li key={scholarship.id}>
            <h3>{scholarship.title}</h3>
            <p>University: {scholarship.university}</p>
            <p>Location: {scholarship.location}</p>
            <p>Duration: {scholarship.duration}</p>
            <p>Acceptance Rate: {scholarship.acceptanceRate}%</p>
            <p>Mode: {scholarship.mode}</p>
            <p>Deadline: {scholarship.deadline}</p>
            <p>Discipline: {scholarship.discipline}</p>
            <p>Scholarships: {scholarship.scholarships}</p>
            <p>Type: {scholarship.type}</p>
            <p>Rating: {scholarship.rating}</p>
            <img src={scholarship.image} alt={scholarship.title} width="200" />
            <a href={scholarship.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
            <button onClick={() => handleDelete(scholarship.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScholarshipList;