import React, { useState } from 'react';
import axios from 'axios';

const MarkAttendance = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    classId: '',
    status: 'Present',
  });

  const { studentId, classId, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/attendance', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Attendance marked successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="mark-attendance">
      <h1>Mark Attendance</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Student ID</label>
          <input
            type="text"
            name="studentId"
            value={studentId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Class ID</label>
          <input
            type="text"
            name="classId"
            value={classId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={status} onChange={onChange}>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">Mark Attendance</button>
      </form>
    </div>
  );
};

export default MarkAttendance;
