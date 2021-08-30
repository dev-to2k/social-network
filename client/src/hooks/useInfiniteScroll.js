import { useEffect, useState } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    const height = window.innerHeight;
    const { scrollTop } = document.documentElement;
    const { offsetHeight } = document.documentElement;

    if (height + scrollTop !== offsetHeight || isFetching) {
      return;
    }
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
