import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get('/api/students', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setStudents(res.data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list">
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
