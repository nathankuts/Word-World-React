import React from 'react';
import './Teasers.css';

const Teasers = () => (
    <section className="row">
        <div className="grid">
            <section className="teasers">
                <a href="light novels.html" id="lightNovelsTeaser">
                    <h5>LIGHT NOVELS</h5>
                    <h3>Original Stories</h3>
                </a>
                <p>Enjoy a collection of original stories from around the world and have fun. You can also publish your own stories, for <b>FREE!</b></p>
            </section>
            <section className="teasers">
                <a href="comics.html" id="comicsTeaser">
                    <h5>COMICS</h5>
                    <h3>Read Comics!</h3>
                </a>
                <p>Read your favorite comics from anywhere around the world. You can also publish your own comics for <b>FREE!</b></p>
            </section>
        </div>
    </section>
);

export default Teasers;

