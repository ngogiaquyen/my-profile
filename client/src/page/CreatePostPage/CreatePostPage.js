import { useContext } from 'react';
import { ModalOverLayContext } from '~/component/Context/ModalOverLayProvider';
import classNames from 'classnames/bind';

import styles from './CreatePostPage.module.scss';
import CreatePost from '~/component/CreatePost';

const cx = classNames.bind(styles);

function CreatePostPage() {
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  return (
    <button className={cx('create-post-btn')} onClick={() => setModalComponentContent(<CreatePost />)}>
      CreatePost
    </button>
  );
}

export default CreatePostPage;
