import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GradeList = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      const res = await axios.get('/api/grades', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setGrades(res.data);
    };

    fetchGrades();
  }, []);

  return (
    <div className="grade-list">
      <h1>Grades</h1>
      <ul>
        {grades.map((grade) => (
          <li key={grade._id}>
            {grade.student.name} - {grade.assignment.title} - Grade: {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradeList;
