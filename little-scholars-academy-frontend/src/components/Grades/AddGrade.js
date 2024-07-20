import React, { useState } from 'react';
import axios from 'axios';

const AddGrade = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    assignmentId: '',
    grade: '',
    feedback: '',
  });

  const { studentId, assignmentId, grade, feedback } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/grades', formData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Grade added successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="add-grade">
      <h1>Add Grade</h1>
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
          <label>Assignment ID</label>
          <input
            type="text"
            name="assignmentId"
            value={assignmentId}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Grade</label>
          <input
            type="number"
            name="grade"
            value={grade}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Feedback</label>
          <textarea
            name="feedback"
            value={feedback}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit">Add Grade</button>
      </form>
    </div>
  );
};

export default AddGrade;
