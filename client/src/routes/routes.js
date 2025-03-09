import Home from '../page/Home';
import Profile from '../page/Profile';
import Projects from '../page/Projects';
import Stories from '../page/Stories';
import Chat from '../component/Chat';
import ChatAdmin from '../component/Chat/ChatUser';
import routes from '../configs';
import HomeLayout from '../Layouts/HomeLayout';
import MessageBoard from '../component/MessageBoard';
import HeaderOnly from '~/Layouts/HeaderOnly';
import PostDetailPage from '~/page/PostDetailPage/PostDetailPage';
import CvPage from '~/page/CvPage';
import EmptyLayout from '~/Layouts/EmptyLayout';
import AdminPage from '~/page/AdminPage';
import FlashCard from '~/component/FlashCardList/FlashCard';
import FlashCardPage from '~/page/FlashCardPage';
import CreatePostPage from '~/page/CreatePostPage';

export const publicRouters = [
  {
    component: Home,
    path: routes.home,
    layout: HomeLayout,
  },
  {
    component: Profile,
    path: routes.profile,
    layout: HomeLayout,
  },
  {
    component: Projects,
    path: routes.projects,
    layout: HeaderOnly,
  },
  {
    component: Stories,
    path: routes.stories,
    layout: HomeLayout,
  },
  {
    component: Chat,
    path: routes.chat,
    layout: HeaderOnly,
  },
  {
    component: ChatAdmin,
    path: routes.chatadmin,
    layout: HeaderOnly,
  },
  {
    component: PostDetailPage,
    path: routes.postDetail + "/:id",
    layout: HeaderOnly,
  },
  {
    component: MessageBoard,
    path: routes.temp,
    layout: HomeLayout,
  },
  {
    component: CvPage,
    path: routes.cV,
    layout: EmptyLayout,
  },
  {
    component: AdminPage,
    path: routes.admin,
    layout: EmptyLayout,
  },
  {
    component: FlashCardPage,
    path: routes.flashCard,
    layout: HeaderOnly,
  },
  {
    component: CreatePostPage,
    path: routes.createPost,
    layout: HeaderOnly,
  },
];

export const privateRouters = [];
