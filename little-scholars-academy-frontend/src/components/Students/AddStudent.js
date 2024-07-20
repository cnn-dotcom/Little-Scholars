import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
  });

  const { name, email, class: className } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Student added successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="add-student">
      <h1>Add Student</h1>
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
          <label>Class</label>
          <input
            type="text"
            name="class"
            value={className}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
