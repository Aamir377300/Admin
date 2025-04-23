import React from 'react';
import ScholarshipForm from '../components/ScholarshipForm';
import ScholarshipList from '../components/ScholarshipList';

function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ScholarshipForm />
      <ScholarshipList />
    </div>
  );
}

export default Dashboard;