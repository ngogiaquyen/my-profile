import Home from '../page/Home';
import Profile from '../page/Profile';
import Projects from '../page/Projects';
import Stories from '../page/Stories';
import Chat from '../component/Chat';
import ChatAdmin from '../component/Chat/ChatUser';
import routes from '../configs';
import HomeLayout from '../Layouts/HomeLayout';
import MessageBoard from '../component/MessageBoard';
import PostDetail from '~/component/PostDetail';
import HeaderOnly from '~/Layouts/HeaderOnly';
import PostDetailPage from '~/page/PostDetailPage/PostDetailPage';
import CvPage from '~/page/CvPage';
import EmptyLayout from '~/Layouts/EmptyLayout';

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
    layout: HomeLayout,
  },
  {
    component: ChatAdmin,
    path: routes.chatadmin,
    layout: HomeLayout,
  },
  {
    component: PostDetailPage,
    path: routes.postDetail,
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
];

export const privateRouters = [];
