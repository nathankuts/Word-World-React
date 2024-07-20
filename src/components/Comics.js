import React, { useState } from 'react';
import './comics.css';

function Comics() {
  const [title, setTitle] = useState('');
  const [comicPage, setComicPage] = useState(null);
  const [publishMessage, setPublishMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comicPage) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const comicImageSrc = event.target.result;

        // Use the mock API to save the comic
        try {
          const response = await postComic(title, comicImageSrc);
          if (response.status === 200) {
            // Redirect to the chapter page with the comic ID
            window.location.href = `chapter.html?id=${response.comic.id}`;
          } else {
            // Handle error
            alert('Failed to save comic');
          }
        } catch (error) {
          alert('Failed to save comic');
        }
      };
      reader.readAsDataURL(comicPage);
    }
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
            <a href="/">HOME</a>
            <a href="/light-novels">LIGHT NOVELS</a>
            <a href="/comics">COMICS</a>
          </nav>
        </div>
      </header>
      <section className="container">
        <div className="center-content">
          <form id="publishForm" className="center-form" onSubmit={handleSubmit}>
            <h2>Publish A Comic</h2>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="comicPage">Upload Comic Page</label>
            <input
              type="file"
              id="comicPage"
              name="comicPage"
              accept="image/*"
              onChange={(e) => setComicPage(e.target.files[0])}
              required
            />
            <button type="submit">Publish</button>
            <p id="publishMessage" className="success">{publishMessage}</p>
          </form>
        </div>
      </section>
      <footer>
        <div className="container">
          <small>&copy; Word World</small>
          <nav>
            <a href="/">HOME</a>
            <a href="/light-novels">LIGHT NOVELS</a>
            <a href="/comics">COMICS</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// Mock API function (Replace this with your actual API call)
const postComic = async (title, comicImageSrc) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, comic: { id: '12345' } });
    }, 1000);
  });
};

export default Comics;
