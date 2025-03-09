import classNames from 'classnames/bind';

import styles from './PostDetail.module.scss';
import PostItem from '../PostList/PostItem';
import { useContext, useEffect, useRef, useState } from 'react';
import Comment from '../Comment';
import avatar from '~/assets/avatar.png';
import { useParams } from 'react-router-dom';
import { getAllByPlaceholderText } from '@testing-library/dom';
import { getData, postData } from '~/helper/apiService';
import { ToastContext } from '../Context/ToastProvider';

const cx = classNames.bind(styles);

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const listRef = useRef();
  const formRef = useRef();
  const { addToast } = useContext(ToastContext);

  const loadData = async () => {
    const data = await getData(`/post/read/${id}`);
    setPost(data[0]);
  };

  const loadComment = async () => {
    const data = await getData(`/post/readcomment/${id}`);
    setComments(data);
  };

  useEffect(() => {
    loadData();
    loadComment();
  }, []);

  const handleAddComment = async (e) => {
    e.preventDefault();
    // if (newComment.trim() === '') return;

    const formData = new FormData(formRef.current);
    formData.append('post_id', id);

    const res = await postData(`/post/createcomment`, formData);
    if (res.status === 'success') {
      await loadComment();
      await loadData();
      formRef.current.reset();
      listRef.current.scrollTop = listRef.current.scrollHeight + 100;
    } else {
      addToast(res);
    }
  };

  const handleLike = async () => {
    const formData = new FormData();
    formData.append('id', post.id);

    const res = await postData('/post/like', formData);
    if (res.status === 'success') {
      loadData();
    } else {
      addToast(res);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <PostItem post={post} handleLike={handleLike} />
      <Comment comments={comments} onAddComment={handleAddComment} listRef={listRef} formRef={formRef} />
    </div>
  );
}

export default PostDetail;
