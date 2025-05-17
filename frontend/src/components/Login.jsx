import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
    const res = await axios.post('http://localhost:8000/api/login', form);

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    navigate('/dashboard');
    }
    catch (error) {
      console.log(error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">SIGN IN</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input className="form-input" type="email" placeholder="Username" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <div className="form-options">
          <label><input type="checkbox" /> Remember me</label>
          <span className="forgot">Forgot your password?</span>
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
      <p className="form-text">Don't have an account? <a href="/register" className="form-link">Login</a></p>
    </div>
  );
}