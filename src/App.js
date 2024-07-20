import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NoticeBoard from './components/NoticeBoard';
import SignupForm from './components/SignupForm';
import SignInForm from './components/SignInForm';
import Teasers from './components/Teasers';
import Footer from './components/Footer';
import PublishedChapter from './components/PublishedChapter/PublishedChapter';
import PublishForm from './components/PublishForm';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <section className="container">
                            <NoticeBoard />
                            <div className="signup-container">
                                <button className="signup-button" id="signupButton">Sign Up</button>
                            </div>
                        </section>
                        <SignupForm />
                        <SignInForm />
                        <Teasers />
                    </Route>
                    <Route path="/chapter">
                        <PublishedChapter />
                    </Route>
                    <Route path="/publish">
                        <PublishForm />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
