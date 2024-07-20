import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await axios.get('/api/assignments', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setAssignments(res.data);
    };

    fetchAssignments();
  }, []);

  return (
    <div className="assignment-list">
      <h1>Assignments</h1>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id}>
            {assignment.title} - {assignment.class.name} - Due: {new Date(assignment.dueDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;
