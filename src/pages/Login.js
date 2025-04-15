import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loadUserFromStorage } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ login: '', password: '' });
  const registeredUser = useSelector((state) => state.user.registeredUser);

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registeredUser &&
      (input.login === registeredUser.username || input.login === registeredUser.email) &&
      input.password === registeredUser.password
    ) {
      dispatch(loginUser(registeredUser));
      navigate('/dashboard');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="text" name="login" placeholder="Username or Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
