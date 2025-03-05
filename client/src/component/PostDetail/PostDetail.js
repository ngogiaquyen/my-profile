import classNames from 'classnames/bind';

import styles from './PostDetail.module.scss';
import PostItem from '../PostList/PostItem';
import { useState } from 'react';
import Comment from '../Comment';
import avatar from '~/assets/avatar.png';

const cx = classNames.bind(styles);

function PostDetail() {
  const [post, setPost] = useState({
    id: 7,
    title: 'Third Post',
    content: 'This is the content of the third post.',
    author: 'User3',
    date: '2023-01-03',
    image: avatar,
    likes: 8,
    comments: [
      { id: 1, content: 'Nice one!', date: '2023-01-06' },
      { id: 2, content: 'Loved it.', date: '2023-01-07' },
    ],
  });
  return (
    <div className={cx('wrapper')}>
      <PostItem post={post} />
      <Comment />
    </div>
  );
}

export default PostDetail;
