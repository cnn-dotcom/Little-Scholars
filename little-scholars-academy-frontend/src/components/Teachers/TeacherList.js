import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const res = await axios.get('/api/teachers', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setTeachers(res.data);
    };

    fetchTeachers();
  }, []);

  return (
    <div className="teacher-list">
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
