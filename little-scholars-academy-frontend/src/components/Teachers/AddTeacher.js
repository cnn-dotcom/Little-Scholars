import React, { useState } from 'react';
import axios from 'axios';

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const { name, email, subject } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/teachers', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Teacher added successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="add-teacher">
      <h1>Add Teacher</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
