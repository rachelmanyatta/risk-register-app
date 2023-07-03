import React, { useState } from 'react';
import styles from '../sass/pages/ForgotPassword.module.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    console.log('Forgot Password:', email);
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
        <p>
        Back to Login <a href="/Login">Login</a>
      </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
