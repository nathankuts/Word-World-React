import React, { useEffect, useState } from 'react';
import './PublishedChapter.css';

const PublishedChapter = () => {
  const [chapter, setChapter] = useState({ title: '', content: '' });
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = parseInt(urlParams.get('id'));

    if (isNaN(chapterId)) {
      setError(true);
      return;
    }

    // Mock API call replaced with a real API call if needed
    getPublishedChapter(chapterId).then(response => {
      if (response.status === 200) {
        setChapter(response.data);
      } else {
        setError(true);
      }
    });
  }, []);

  const getPublishedChapter = async (id) => {
    // Mock API response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, data: { title: 'Sample Chapter Title', content: '<p>Sample chapter content...</p>' } });
      }, 1000);
    });
  };

  if (error) {
    return (
      <div className="chapter-section">
        <h2 id="chapterTitle">No Chapter Found</h2>
        <div id="chapterBody">Please publish a chapter first.</div>
      </div>
    );
  }

  return (
    <main>
      <section className="container chapter-section">
        <h2 id="chapterTitle">{chapter.title}</h2>
        <div id="chapterBody" dangerouslySetInnerHTML={{ __html: chapter.content }}></div>
        <button id="nextChapter">Next Chapter</button>
      </section>
    </main>
  );
};

export default PublishedChapter;
