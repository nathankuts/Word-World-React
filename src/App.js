import React from 'react';
import './App.css';
import Header from './components/Header';
import NoticeBoard from './components/NoticeBoard';
import SignupForm from './components/SignupForm';
import Teasers from './components/Teasers';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <section className="container">
                <NoticeBoard />
                <div className="signup-container">
                    <button className="signup-button" id="signupButton">Sign Up</button>
                </div>
            </section>
            <SignupForm />
            <Teasers />
            <Footer />
        </div>
    );
}

export default App;

