import classNames from 'classnames/bind';
import styles from './PostDetailPage.module.scss';
import PostDetail from '~/component/PostDetail';
import PostList from '~/component/PostList';

const cx = classNames.bind(styles);
const imgLink =
  "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481088236_2081652008969458_7284515321503083727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFHoHMKElmLrYypHXIJqLEb8GCIozoxcBrwYIijOjFwGk1XLtRAzV74-zphNQ-nEljn3SHCL3rH-KR8udQ9l_P5&_nc_ohc=eRjLBS5wns0Q7kNvgF-FUJY&_nc_oc=Adg2K_sEcw6EwnznH0HogirAr0QzNUiXdMcS3p9qzYFsE1KzJpe-iJkBLEkNdg_o0A8tdit6nNsYBIclcwwACyhh&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AfqE0OGwJkYethD0vhYnAEF&oh=00_AYBObjfPkmwPhCh9mZr7OnGVrDGV_FgOFXUoSMFvMowUeQ&oe=67C7BBEF";

const posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      author: "User1",
      date: "2023-01-01",
      image: imgLink,
      likes: 10,
      comments: [
        { id: 1, content: "Great post!", date: "2023-01-02" },
        { id: 2, content: "Really enjoyed this.", date: "2023-01-03" },
      ],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content ofThis is the content ofThis is the content ofThis is the content ofThis is the content of the second post.",
      author: "User2",
      date: "2023-01-02",
      image: imgLink,
      likes: 5,
      comments: [
        { id: 1, content: "Interesting read.", date: "2023-01-04" },
        { id: 2, content: "Thanks for sharing!", date: "2023-01-05" },
      ],
    },
    {
      id: 3,
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "User3",
      date: "2023-01-03",
      image: imgLink,
      likes: 8,
      comments: [
        { id: 1, content: "Nice one!", date: "2023-01-06" },
        { id: 2, content: "Loved it.", date: "2023-01-07" },
      ],
    },
    {
      id: 4,
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "User3",
      date: "2023-01-03",
      image: imgLink,
      likes: 8,
      comments: [
        { id: 1, content: "Nice one!", date: "2023-01-06" },
        { id: 2, content: "Loved it.", date: "2023-01-07" },
      ],
    },
    {
      id: 5,
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "User3",
      date: "2023-01-03",
      image: imgLink,
      likes: 8,
      comments: [
        { id: 1, content: "Nice one!", date: "2023-01-06" },
        { id: 2, content: "Loved it.", date: "2023-01-07" },
      ],
    },
    {
      id: 6,
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "User3",
      date: "2023-01-03",
      image: imgLink,
      likes: 8,
      comments: [
        { id: 1, content: "Nice one!", date: "2023-01-06" },
        { id: 2, content: "Loved it.", date: "2023-01-07" },
      ],
    },
    {
      id: 7,
      title: "Third Post",
      content: "This is the content of the third post.",
      author: "User3",
      date: "2023-01-03",
      image: imgLink,
      likes: 8,
      comments: [
        { id: 1, content: "Nice one!", date: "2023-01-06" },
        { id: 2, content: "Loved it.", date: "2023-01-07" },
      ],
    },
  ];
function PostDetailPage() {
  return (
    <div className={cx('wrapper')}>
      <PostDetail />
      <div className={cx('more-post')}><PostList title="Bài viết khác" type="col" posts={posts} /></div>
    </div>
  );
}

export default PostDetailPage;
