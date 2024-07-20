import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await axios.get('/api/classes', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setClasses(res.data);
    };

    fetchClasses();
  }, []);

  return (
    <div className="class-list">
      <h1>Classes</h1>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>{cls.name} - Teacher: {cls.teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
