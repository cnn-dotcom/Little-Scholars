import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const res = await axios.get('/api/announcements', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setAnnouncements(res.data);
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="announcements">
      <h1>Announcements</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement._id}>
            <h2>{announcement.title}</h2>
            <p>{announcement.message}</p>
            <p>{new Date(announcement.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
