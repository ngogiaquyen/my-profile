import Home from "../page/Home";
import Profile from "../page/Profile";
import Projects from "../page/Projects";
import Stories from "../page/Stories";
import Chat from "../component/Chat";
import ChatAdmin from "../component/Chat/ChatUser";
import routes from "../configs";
import HomeLayout from "../Layouts/HomeLayout"
import MessageBoard from "../component/MessageBoard";

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
    layout: HomeLayout,
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
    component: MessageBoard,
    path: routes.temp,
    layout: HomeLayout,
  },
];

export const privateRouters = [];
