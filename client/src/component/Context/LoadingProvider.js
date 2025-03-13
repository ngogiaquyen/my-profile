// LoadingProvider.js
import { createContext, useContext, useEffect, useState } from 'react';
import { ModalOverLayContext } from './ModalOverLayProvider';
import Loader from '../Loader';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);
  const { modalComponentContent, setModalComponentContent } = useContext(ModalOverLayContext);

  const startLoading = () => setLoadingCount((count) => count + 1);
  const stopLoading = () => setLoadingCount((count) => Math.max(0, count - 1));
  // useEffect(() => {
  //   if (loadingCount === 0) {
  //     setModalComponentContent(null);
  //   } else {
  //     setModalComponentContent(<Loader />);
  //   }
  // }, [loadingCount]);
  return <LoadingContext.Provider value={{ loadingCount, startLoading, stopLoading }}>{children}</LoadingContext.Provider>;
};

export const useLoading = () => useContext(LoadingContext);
