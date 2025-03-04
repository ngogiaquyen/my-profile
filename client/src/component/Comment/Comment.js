import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { scrollToBottom } from '~/helper/scroll';

const cx = classNames.bind(styles);

function Comment({ postId }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: 'Bài viết rất hay, cảm ơn bạn!',
      date: '2024-03-04T10:15:30.000Z',
    },
    {
      id: 2,
      content: 'Mình rất thích cách bạn trình bày!',
      date: '2024-03-04T11:00:45.000Z',
    },
    {
      id: 3,
      content: 'Cảm ơn vì bài viết hữu ích!',
      date: '2024-03-04T12:20:10.000Z',
    },
    {
      id: 4,
      content: 'Bạn có thể viết thêm về chủ đề này không?',
      date: '2024-03-04T13:45:00.000Z',
    },
    {
      id: 5,
      content: 'Rất bổ ích, mong bạn ra thêm nhiều bài viết hơn!',
      date: '2024-03-04T14:10:25.000Z',
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const commentRef = useRef();
  const listRef = useRef();

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const comment = {
      id: comments.length + 1,
      content: newComment,
      date: new Date().toISOString(),
    };
    setComments([...comments, comment]);
    setNewComment('');
    listRef.current.scrollTop = listRef.current.scrollHeight;
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  return (
    <div className={cx('commentSection')} ref={commentRef}>
      <div className={cx('commentList')} ref={listRef}>
        {comments.map((comment) => (
          <div key={comment.id} className={cx('comment')}>
            <p className={cx('commentContent')}>{comment.content}</p>
            <em className={cx('commentDate')}>{new Date(comment.date).toLocaleDateString()}</em>
          </div>
        ))}
      </div>
      <div className={cx('comment-action', { fixed: true })}>
        <input
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add a comment..."
          className={cx('input')}
          // onFocus={handleFocusInput}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddComment} className={cx('button')}>
          Comment
        </button>
      </div>
    </div>
  );
}

export default Comment;
