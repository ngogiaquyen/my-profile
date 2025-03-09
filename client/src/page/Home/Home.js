import React, { useContext } from 'react';
import Projects from '../Projects';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PostList from '~/component/PostList';
import CreatePost from '~/component/CreatePost';
import { FetchDataContext } from '~/component/Context/FetchDataProvider';
import { ModalOverLayContext } from '~/component/Context/ModalOverLayProvider';
import ThreePicture from '~/component/ThreePicture';
import Footer from '~/component/Footer/Footer';

const cx = classNames.bind(styles);

// const posts = [
//   {
//     id: 1,
//     title: 'First Post',
//     content: 'This is the content of the first post.',
//     author: 'User1',
//     date: '2023-01-01',
//     image: avatar,
//     likes: 10,
//     comment: 10
//   }
// ];

function Home() {
  const { posts } = useContext(FetchDataContext);

  return (
    <div className={cx('homepage')}>
      <PostList posts={posts || []} />
      {/* <Stories /> */}
      {/* <MessageBoard /> */}
      {/* <Projects /> */}
      <ThreePicture />
      <Footer/>
    </div>
  );
}

export default Home;
