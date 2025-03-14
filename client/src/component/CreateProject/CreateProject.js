import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CreateProject.module.scss';
import { postData } from '~/helper/apiService';
import { FetchDataContext } from '../Context/FetchDataProvider';
import PostForm from '../Form/PostForm';
import { ToastContext } from '../Context/ToastProvider';
import ProjectForm from '../Form/ProjectForm';

const cx = classNames.bind(styles);

function CreateProject() {
  const { loadPosts } = useContext(FetchDataContext);
  const fileInputRef = useRef(null);
  const [key, setKey] = useState('');
  const { addToast } = useContext(ToastContext);

  const [content, setContent] = useState(localStorage.getItem('markdown') || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Gửi dữ liệu lên máy chủ hoặc xử lý tại client-side
    const res = await postData('/projects/create', formData);
    console.log(res);
    if (res.status === 'success') {
      setKey((prev) => prev + 1);
    } else {
      addToast(res);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <ProjectForm
        key={key}
        titleBtn="Create post"
        data={{ content: content }}
        handleSubmit={handleSubmit}
        fileInputRef={fileInputRef}
      />
    </div>
  );
}

export default CreateProject;
