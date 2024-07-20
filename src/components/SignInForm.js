import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: event.target.method,
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        alert('Signed in successfully!');
        window.location.href = 'publish.html';
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(error => error.message).join(', '));
        } else {
          setError('An error occurred. Please try again.');
        }
      }
    } catch {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="container">
      <form action="https://formspree.io/f/xzzppqdp" method="POST" id="signInForm" className="center-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="signInEmail">Email</label>
        <input type="email" id="signInEmail" name="email" required />

        <label htmlFor="signInPassword">Password</label>
        <input type="password" id="signInPassword" name="password" required />

        <button type="submit" className="signup-button">Sign In</button>
        <p id="signInErrorMessage" className="error">{error}</p>
      </form>
    </section>
  );
};

export default SignInForm;
