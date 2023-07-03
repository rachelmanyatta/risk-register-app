import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(username, password);
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
      <input
        type="password"
        placeholder="Password again"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit"><a href='/Register'>Sign Up</a></button>
      <p>
        Already have an account? <a href="/Login">Login</a>
      </p>
    </form>
  );
};

export default SignupForm;
