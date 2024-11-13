import React, { useState } from 'react';
import axios from 'axios'; // For ES6 imports
function EmailForm({ onEmailSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =await axios.post('http://localhost:4000/user/sent-otp',{email})
    const data =response.data;
    console.log(response.data); 

    if (data.success) {
      onEmailSubmit(email); // Pass email to parent component
    } else {
      alert('Error sending OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;