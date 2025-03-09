import classNames from 'classnames/bind';
import styles from './PostDetailPage.module.scss';
import PostDetail from '~/component/PostDetail';
import PostList from '~/component/PostList';
import { useContext } from 'react';
import { FetchDataContext } from '~/component/Context/FetchDataProvider';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function PostDetailPage() {
  const { id } = useParams();

  const { posts } = useContext(FetchDataContext);

  return (
    <div className={cx('wrapper')} key={id}>
      <PostDetail />
      <div className={cx('more-post')}>
        <PostList title="Bài viết khác" type="col" posts={posts} />
      </div>
    </div>
  );
}

export default PostDetailPage;
