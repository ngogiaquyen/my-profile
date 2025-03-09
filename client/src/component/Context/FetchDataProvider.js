import { createContext, useEffect, useState } from 'react';
import { getData } from '~/helper/apiService';
import { useLoading } from './LoadingProvider';

const FetchDataContext = createContext();

function FetchDataProvider({children}) {
  const [posts, setPosts] = useState([]);
  const { startLoading, stopLoading } = useLoading();

  const loadPosts = async () => {
    const newPost = await getData('/post/read', null, startLoading, stopLoading);
    setPosts(newPost);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return <FetchDataContext.Provider value={{ posts, loadPosts }}>{children}</FetchDataContext.Provider>;
}

export {FetchDataContext, FetchDataProvider};
