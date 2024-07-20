import React, { useState } from 'react';
import axios from 'axios';

const AddAssignment = () => {
  const [formData, setFormData] = useState({
    classId: '',
    title: '',
    description: '',
    dueDate: '',
  });

  const { classId, title, description, dueDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/assignments', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Assignment added successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="add-assignment">
      <h1>Add Assignment</h1>
      <form onSubmit={onSubmit}>
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
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Add Assignment</button>
      </form>
    </div>
  );
};

export default AddAssignment;
