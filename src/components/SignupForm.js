import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            // Handle error
            return;
        }

        // Handle form submission
    };

    return (
        <section className="popup-form" id="popupForm">
            <form action="https://formspree.io/f/xzzppqdp" method="POST" id="createAccountForm" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit">Create Account</button>
                <p id="errorMessage" className="error"></p>
            </form>
        </section>
    );
};

export default SignupForm;

