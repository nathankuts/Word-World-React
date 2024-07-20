import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <a href="index.html">
                <h1 className="logo">Word World</h1>
                <h5>Home for original stories</h5>
            </a>
            <nav>
                <a href="/">HOME</a>
                <a href="/light-novels" id="lightNovelsLink">LIGHT NOVELS</a>
                <a href="/comics" id="comicsLink">COMICS</a>
            </nav>
        </div>
    </header>
);

export default Header;
