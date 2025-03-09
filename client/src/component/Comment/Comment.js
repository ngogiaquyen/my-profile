import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

function Comment({comments, formRef, listRef, onAddComment}) {
  const commentRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddComment(e);
    }
  };

  return (
    <div className={cx('commentSection')} ref={commentRef}>
      <div className={cx('commentList')} ref={listRef}>
        {comments.map((comment) => (
          <div key={comment.id} className={cx('comment')}>
            <p className={cx('commentContent')}>{comment.content}</p>
            <em className={cx('commentDate')}>{new Date(comment.date_create).toLocaleDateString()}</em>
          </div>
        ))}
        {/* <p onClick={() => setcountComment((prev) => prev + 1)}>Xem thêm</p> */}
      </div>
      <form ref={formRef} className={cx('comment-action', { fixed: true })}>
        <input
          type="text"
          name="content"
          placeholder="Add a comment..."
          className={cx('input')}
          // onFocus={handleFocusInput}
          onKeyDown={handleKeyDown}
        />
        <button type='submit' onClick={onAddComment} className={cx('button')}>
          Comment
        </button>
      </form>
    </div>
  );
}

export default Comment;
