import React, { useState } from 'react';

function Comment({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const comment = {
            id: comments.length + 1,
            content: newComment,
            date: new Date().toISOString(),
        };
        setComments([...comments, comment]);
        setNewComment('');
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <div className="comment-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <p>{comment.content}</p>
                        <em>{new Date(comment.date).toLocaleDateString()}</em>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <button onClick={handleAddComment}>Comment</button>
        </div>
    );
}

export default Comment;
