import React, { useState } from 'react';
import axios from 'axios';

const AddClass = () => {
  const [formData, setFormData] = useState({
    name: '',
    teacherId: '',
    studentIds: '',
  });

  const { name, teacherId, studentIds } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/classes', {
        ...formData,
        studentIds: studentIds.split(',').map((id) => id.trim()),
      }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Class added successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="add-class">
      <h1>Add Class</h1>
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
          <label>Teacher ID</label>
          <input
            type="text"
            name="teacherId"
            value={teacherId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Student IDs (comma separated)</label>
          <input
            type="text"
            name="studentIds"
            value={studentIds}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
