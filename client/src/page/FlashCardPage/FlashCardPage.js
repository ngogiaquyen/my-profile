import classNames from 'classnames/bind';
import styles from './FlashCardPage.module.scss';
import FlashCardList from '~/component/FlashCardList';
import { useEffect, useState } from 'react';
import { getData } from '~/helper/apiService';

const cx = classNames.bind(styles);

function FlashCardPage() {
  const [words, setWords] = useState([]);
  const loadData = async () => {
    const res = await getData('/flashcard/read');
    setWords(res);
    console.log(res);
  };
  

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <FlashCardList words={words} />
    </div>
  );
}

export default FlashCardPage;
