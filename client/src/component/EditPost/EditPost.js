import React, { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EditPost.module.scss';
import FormGroup from '../FormGroup';
import { getData, postData } from '~/helper/apiService';
import { FetchDataContext } from '../Context/FetchDataProvider';
import PostForm from '../Form/PostForm';
import { ToastContext } from '../Context/ToastProvider';

const cx = classNames.bind(styles);

function EditPost({ id }) {
  const { loadPosts } = useContext(FetchDataContext);
  const fileInputRef = useRef(null);
  const [key, setKey] = useState('');
  const [postInfo, setPostInfo] = useState({});
  const { addToast } = useContext(ToastContext);

  const loadPost = async () => {
    const res = await getData(`/post/read/${id}`);
    if (res) setPostInfo(res[0]);
  };

  useEffect(() => {
    loadPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('id', id);

    const res = await postData('/post/update', formData);
    if (res.status === 'success') {
      loadPosts();
      setKey((prev) => prev + 1);
    }else{
      addToast(res);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <PostForm
        key={key}
        titleBtn="Edit post"
        data={postInfo}
        handleSubmit={handleSubmit}
        fileInputRef={fileInputRef}
      />
    </div>
  );
}

export default EditPost;
