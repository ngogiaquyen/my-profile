import { useContext } from 'react';
import { ModalOverLayContext } from '~/component/Context/ModalOverLayProvider';
import classNames from 'classnames/bind';

import styles from './CreatePostPage.module.scss';
import CreatePost from '~/component/CreatePost';
import CreateProject from '~/component/CreateProject';

const cx = classNames.bind(styles);

function CreatePostPage() {
  const { setModalComponentContent } = useContext(ModalOverLayContext);
  return (
    <div className={cx('wrapper')}>
      <button className={cx('create-post-btn')} onClick={() => setModalComponentContent(<CreatePost />)}>
        CreatePost
      </button>
      <button className={cx('create-post-btn')} onClick={() => setModalComponentContent(<CreateProject />)}>
        Create projects
      </button>
    </div>
  );
}

export default CreatePostPage;
