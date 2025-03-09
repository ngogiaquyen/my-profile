import React, { useContext, useState } from 'react';
import styles from './PostList.module.scss'; // Sử dụng CSS Modules
import classNames from 'classnames/bind';
import Comment from '../Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from '~/configs';
import { BASE_URL_IMG, postData } from '~/helper/apiService';
import Controller from '../Controller';
import { ModalOverLayContext } from '../Context/ModalOverLayProvider';
import EditPost from '../EditPost';
import ConfirmModal from '../ConfirmModal';
import { FetchDataContext } from '../Context/FetchDataProvider';
import { ToastContext } from '../Context/ToastProvider';
import { LoginContext } from '../Context/LoginProvider';

const cx = classNames.bind(styles);

function PostItem({ post, handleLike }) {
  const { modalComponentContent, setModalComponentContent } = useContext(ModalOverLayContext);
  const { loadPosts } = useContext(FetchDataContext);
  const { addToast } = useContext(ToastContext);
  const { loginStatus } = useContext(LoginContext);

  const handleEdit = (e) => {
    e.preventDefault();
    setModalComponentContent(<EditPost id={post.id} />);
  };

  const handleConfirmDelete = async () => {
    const formData = new FormData();
    formData.append('id', post.id);
    const res = await postData('/post/delete', formData);
    if (res.status === 'success') {
      loadPosts();
      setModalComponentContent(null);
    } else {
      addToast(res);
    }
  };
  const handleCancelDelete = () => {
    setModalComponentContent(null);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setModalComponentContent(
      <ConfirmModal
        title="Xác nhận xóa bài viết"
        handleConfirm={handleConfirmDelete}
        handleCancel={handleCancelDelete}
      />,
    );
  };

  return (
    <NavLink to={`${routes.postDetail}/${post.id}`} key={post.id} className={cx('post')}>
      {loginStatus && <Controller className={cx('controller')} handleEdit={handleEdit} handleDelete={handleDelete} />}
      {post.img && (
        <div className={cx('post-image-wrapper')}>
          <img src={BASE_URL_IMG + '/' + post.img} alt="Post" className={cx('post-image')} />
        </div>
      )}

      <h2 className={cx('post-title')}>{post.title}</h2>
      <p className={cx('post-content')}>{post.content}</p>
      <div className={cx('post-meta')}>
        <div className={cx('post-meta-box')}>
          <p className={cx('comment-box')}>
            <FontAwesomeIcon className={cx('icon')} icon={faHeart} onClick={handleLike} />
            <span className={cx('text')}>{post.likes}</span>
          </p>
          <p className={cx('comment-box')}>
            <FontAwesomeIcon className={cx('icon')} icon={faComment} />
            <span className={cx('text')}>{post.comment_count}</span>
          </p>
        </div>
        <p className={cx('post-more')}>
          Posted by <span className={cx('post-author')}>Quyen</span> on {post.date_create}
        </p>
      </div>

      {/* <div className={cx("post-actions")}>
        <button
          className={cx("btn", "like-btn")}
          onClick={() => handleLike(post.id)}
        >
          <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
          Like
        </button>
        <button
          className={cx("btn", "comment-btn")}
          onClick={() => handleComment(post.id)}
        >
          💬 Comment
        </button>
        </div> */}
      {/* <Comment /> */}
      {/* <Button>
          Comment
        </Button> */}
    </NavLink>
  );
}

export default PostItem;
