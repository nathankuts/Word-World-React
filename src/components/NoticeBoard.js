import React, { useState, useEffect } from 'react';
import './NoticeBoard.css';

const NoticeBoard = () => {
    const [newWorks, setNewWorks] = useState([
        { title: 'The Adventures of Tom', link: 'published-chapter.html' },
        { title: 'Mystery in the Woods', link: 'comics.html' },
        { title: 'Love in the Time of Dragons', link: 'published-chapter.html' }
    ]);

    const loadNotices = () => {
        // Implementation of loadNotices function
    };

    const fetchNewData = () => {
        // Implementation of fetchNewData function
    };

    useEffect(() => {
        loadNotices();
        const interval = setInterval(fetchNewData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="notice-board">
            <h2>Newly Published Works</h2>
            <ul id="noticeList">
                {newWorks.map((work, index) => (
                    <li key={index}>
                        <a href={work.link}>{work.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoticeBoard;

