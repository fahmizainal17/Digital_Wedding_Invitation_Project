import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div className="comment-section">
            <h2>Ucapan dan Doa Kahwin</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="comments">
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
