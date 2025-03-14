import classNames from 'classnames/bind';
import styles from './ProjectDetailPage.module.scss';
import MarkdownViewer from '~/Layouts/components/MarkdownViewer';
import { useEffect, useState } from 'react';
import { getData } from '~/helper/apiService';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProjectDetailPage() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const loadData = async () => {
    const data = await getData(`/projects/read/${id}`);
    setContent(data[0].content);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={cx('wrapper')}>
      <MarkdownViewer content={content} />
    </div>
  );
}

export default ProjectDetailPage;
