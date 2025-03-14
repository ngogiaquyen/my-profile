import classNames from 'classnames/bind';
import styles from './NotePage.module.scss';
import MarkdownEditor from '~/Layouts/components/MarkdownEditor';
import { useState } from 'react';

const cx = classNames.bind(styles);

function NotePage() {
    const [savedContent, setSavedContent] = useState("");

  return (
    <div  className={cx('wrapper')}>
      <MarkdownEditor onSave={(content) => setSavedContent(content)} />
    </div>
  );
}

export default NotePage;
