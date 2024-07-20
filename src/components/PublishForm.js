// src/components/PublishForm.js
import React, { useState } from 'react';
import './PublishForm.css';
import { postPublishedChapter } from '../mockApi';

const PublishForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    postPublishedChapter(title, content).then(response => {
      if (response.status === 200) {
        window.location.href = `published-chapter.html?id=${response.chapter.id}`;
      } else {
        alert('Failed to save chapter');
      }
    });
  };

  return (
    <section className="container">
      <form id="publishForm" className="center-form" onSubmit={handleSubmit}>
        <h2>Publish A Chapter</h2>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label htmlFor="content">Content</label>
        <div
          id="content"
          name="content"
          contentEditable="true"
          className="editable"
          onInput={(e) => setContent(e.target.innerHTML)}
          required
        ></div>
        
        <button type="submit">Publish</button>
        <p id="publishMessage" className="success">{message}</p>
      </form>
    </section>
  );
};

export default PublishForm;
