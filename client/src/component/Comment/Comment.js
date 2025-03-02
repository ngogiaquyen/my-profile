import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";

const cx = classNames.bind(styles);

function Comment({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const comment = {
      id: comments.length + 1,
      content: newComment,
      date: new Date().toISOString(),
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className={cx("commentSection")}>
      <div className={cx("commentList")}>
        {comments.map((comment) => (
          <div key={comment.id} className={cx("comment")}>
            <p className={cx("commentContent")}>{comment.content}</p>
            <em className={cx("commentDate")}>
              {new Date(comment.date).toLocaleDateString()}
            </em>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
        className={cx("input")}
      />
      <button onClick={handleAddComment} className={cx("button")}>
        Comment
      </button>
    </div>
  );
}

export default Comment;
