import React, { useEffect, useState } from 'react';
import { getComic } from './mockApi';
import './chapter.css';

const Chapter = () => {
    const [comic, setComic] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const comicId = parseInt(urlParams.get('id'));

        if (isNaN(comicId)) {
            setError(true);
            return;
        }

        getComic(comicId).then(response => {
            if (response.status === 200) {
                setComic(response.data);
            } else {
                setError(true);
            }
        });
    }, []);

    const handleNextChapter = () => {
        // Logic to load the next chapter
        window.location.href = 'next_chapter.html'; // Update with actual next chapter URL
    };

    return (
        <div>
            <header>
                <div className="container">
                    <a href="index.html">
                        <h1 className="logo">Word World</h1>
                        <h5>Home for original stories</h5>
                    </a>
                    <nav>
                        <a href="index.html">HOME</a>
                        <a href="light novels.html">LIGHT NOVELS</a>
                        <a href="comics.html">COMICS</a>
                    </nav>
                </div>
            </header>
            <section className="container">
                <div className="chapter-content">
                    <h1 className="chapter-title">Published Chapter</h1>
                    <h2 id="chapterTitle" className="chapter-title">
                        {error ? 'No Comic Found' : (comic ? comic.title : 'Loading...')}
                    </h2>
                    {comic && comic.imageSrc && (
                        <img id="comicImage" className="comic-image" src={comic.imageSrc} alt="Comic Page" />
                    )}
                    <div id="chapterBody" className="chapter-body"></div>
                    <button id="nextChapterButton" onClick={handleNextChapter}>
                        Next Chapter
                    </button>
                </div>
            </section>
            <footer>
                <div className="container">
                    <small>&copy;Word World</small>
                    <nav>
                        <a href="index.html">HOME</a>
                        <a href="light novels.html">LIGHT NOVELS</a>
                        <a href="comics.html">COMICS</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Chapter;
