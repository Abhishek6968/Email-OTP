import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OTPForm({ email, onOTPVerify }) {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send OTP to backend for validation
      const response = await axios.post('http://localhost:4000/user/validate-otp', {
        otp
      });
      const data = response.data;

      if (data.valid) {
        navigate('/home');
      } else {
        setErrorMessage(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setErrorMessage('An error occurred while verifying OTP.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label><h2>MOCK EXIT EXAM</h2></label>

        <input
          type="text"
          placeholder='Enter OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          maxLength="4"
        />
        <button type="submit">Verify OTP</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      </form>
    </div>
  );
}

export default OTPForm;
