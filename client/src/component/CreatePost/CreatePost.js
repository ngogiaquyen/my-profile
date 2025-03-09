import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreatePost.module.scss';
import FormGroup from '../FormGroup';
import { postData } from '~/helper/apiService';
import { FetchDataContext } from '../Context/FetchDataProvider';
import PostForm from '../Form/PostForm';
import { ToastContext } from '../Context/ToastProvider';

const cx = classNames.bind(styles);

function CreatePost() {
  const { loadPosts } = useContext(FetchDataContext);
  const fileInputRef = useRef(null);
  const [key, setKey] = useState('');
  const { addToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Gửi dữ liệu lên máy chủ hoặc xử lý tại client-side
    const res = await postData('/post/create', formData);
    if (res.status === 'success') {
      loadPosts();
      setKey((prev) => prev + 1);
    } else {
      addToast(res);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <PostForm key={key} titleBtn="Create post" handleSubmit={handleSubmit} fileInputRef={fileInputRef} />
    </div>
  );
}

export default CreatePost;
