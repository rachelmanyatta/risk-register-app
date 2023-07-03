import React, { useState } from 'react';

const LoginForm = ({ onLogin, onForgotPassword, onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <div>
        <a href="/Forgotpassword" onClick={onForgotPassword}>
          Forgot Password
        </a>
        <span> | </span>
        <a href="/Signup" onClick={onSignUp}>
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
