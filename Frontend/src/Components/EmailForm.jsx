import React, { useState } from 'react';
import axios from 'axios'; // For ES6 imports
function EmailForm({ onEmailSubmit }) {
  const [email, setEmail] = useState('');
  const [loading,setLoading]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      <label><h2>MOCK EXIT EXAM</h2></label>
      <input type="email" placeholder='Enter mail' value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
      <button type="submit">Send OTP</button>
      {loading && ( <p>Please wait while we load next page!!<br/>&#128512;🕘</p>)}
    </form>
  );
}

export default EmailForm;