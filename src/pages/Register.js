import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    username: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{6,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!validatePassword(form.password)) {
      alert('Password must have uppercase, lowercase, number, and special character');
      return;
    }
    dispatch(registerUser(form));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {['firstName', 'lastName', 'email', 'username', 'password', 'confirmPassword'].map((field) => (
        <input
          key={field}
          type={field.includes('password') ? 'password' : 'text'}
          name={field}
          placeholder={field.replace(/([A-Z])/g, ' $1')}
          value={form[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
