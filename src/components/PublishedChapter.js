import React, { useEffect, useState } from 'react';
import { getComic } from './mockApi';
import './chapter.css';

const PublishedChapter = () => {
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
        window.location.href = 'next_chapter.html'; // Update with actual next chapter URL
    };

    return (
        <div>
            <section className="container">
                <div className="chapter-content">
                    <h1 className="chapter-title">Published Chapter</h1>
                    <h2 className="chapter-title">
                        {error ? 'No Comic Found' : (comic ? comic.title : 'Loading...')}
                    </h2>
                    {comic && comic.imageSrc && (
                        <img className="comic-image" src={comic.imageSrc} alt="Comic Page" />
                    )}
                    <div className="chapter-body"></div>
                    <button onClick={handleNextChapter}>
                        Next Chapter
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PublishedChapter;
