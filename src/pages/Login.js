import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../sass/pages/Login.module.scss';

const Login = () => {
  const handleLogin = (username, password) => {
    console.log('Logged in with:', username, password);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
