import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/Style.css'

export default function Register() {
  const [form, setForm] = useState({ name: '', dob: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/register', form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">SIGN UP</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input className="form-input" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="form-input" type="date" onChange={e => setForm({ ...form, dob: e.target.value })} />
        <input className="form-input" type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="form-button" type="submit">Register</button>
        <p className="form-text">Already have an account? <a href="/login" className="form-link">Login</a></p>
      </form>
    </div>
  );
}