import React from 'react';
import styles from '../sass/pages/Login.module.scss';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const handleSignup = (username, password) => {
    console.log('Logged in with:', username, password);
  };

  return (
<div className={styles['signup-form']}>
    <h2>Signup</h2>
  <SignupForm onSignup={handleSignup} />
</div>
  );
};

export default Signup;
