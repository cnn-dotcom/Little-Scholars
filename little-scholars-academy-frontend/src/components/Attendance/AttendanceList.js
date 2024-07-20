import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceList = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      const res = await axios.get('/api/attendance', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setAttendanceRecords(res.data);
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <div className="attendance-list">
      <h1>Attendance Records</h1>
      <ul>
        {attendanceRecords.map((record) => (
          <li key={record._id}>
            {record.student.name} - {record.class.name} - {record.status} on {new Date(record.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList;
