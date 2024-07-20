import React, { useState } from 'react';
import axios from 'axios';

const Messaging = () => {
  const [message, setMessage] = useState('');

  const onChange = (e) => setMessage(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/messaging', { message }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      alert('Message sent successfully');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="messaging">
      <h1>Send Message</h1>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Messaging;
