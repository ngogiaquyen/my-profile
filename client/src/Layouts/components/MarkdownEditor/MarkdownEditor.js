import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TextareaAutosize from 'react-textarea-autosize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './MarkdownEditor.module.scss';
import classNames from 'classnames/bind';
import { BASE_URL, BASE_URL_IMG, postData } from '~/helper/apiService';
import { oneDark, dracula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkBreaks from 'remark-breaks';
import MarkdownViewer from '../MarkdownViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export const THEMES = { oneDark, dracula, solarizedlight };
function MarkdownEditor({ onSave }) {
  const [content, setContent] = useState(localStorage.getItem('markdown') || '');
  const [images, setImages] = useState([]);
  const textareaRef = useRef(null);
  const [theme, setTheme] = useState('oneDark');
  useEffect(() => {
    localStorage.setItem('markdown', content);
  }, [content]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleChange = (e) => setContent(e.target.value);

  // const insertImage = (url) => {
  //   setContent((prev) => prev + `\n\n![img](${url})\n\n`);
  // };
  const insertImage = (url) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
  
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const textBefore = textarea.value.substring(start, end);
    const imageText = `\n\n![img](${url})\n\n`;
  
    setContent(textarea.value.substring(0, start) + imageText + textarea.value.substring(end));
  
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + imageText.length;
      textarea.focus();
    }, 0);
  };

  const handleLoadImg = async () => {
    const data = await postData(`image/read`);
    console.log(data);
    if (data.status === 'success') {
      setImages(data.data);
    }
  };

  // 🖼 Xử lý kéo & thả ảnh
  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const formData = new FormData();
    formData.append('img', file);
    console.log(`${BASE_URL}image/upload`);
    const data = await postData(`image/upload`, formData);
    console.log(data);
    if (data.status === 'success') {
      handleLoadImg();
      // const imageUrl = data.data.url;
      // setImages((prev) => [...prev, { name: file.name, url: imageUrl }]);
    }
  };

  const insertText = (startTag, endTag = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const newText = startTag + selectedText + endTag;

    setContent(textarea.value.substring(0, start) + newText + textarea.value.substring(end));

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + newText.length;
      textarea.focus();
    }, 0);
  };

  useEffect(() => {
    handleLoadImg();
  }, []);

  const handleDeleteImg = async(e,url)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("url", url);
    const res = await postData("/image/delete", formData);
    console.log(res)
    if(res.status === "success"){
      handleLoadImg();
    }
  }

  return (
    <div className={cx('wrapper')} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <div className={cx('image-list')}>
        <h3>📂 Ảnh đã tải</h3>
        <div className={cx('imgs')}>
          {images.map((url, index) => (
            <div key={index} className={cx('image-item')} >
              <img src={BASE_URL_IMG + url} alt="" className={cx('thumbnail')} onClick={() => insertImage(url)}/>
              <FontAwesomeIcon className={cx("icon-delete")} icon={faTrash} onClick={(e)=>handleDeleteImg(e,url)}/>
            </div>
          ))}
        </div>
      </div>

      <div className={cx('editor-area')}>
        <div className={cx('toolbar')}>
          <button onClick={() => insertText('# ')}>H1</button>
          <button onClick={() => insertText('**', '**')}>B</button>
          <button onClick={() => insertText('*', '*')}>I</button>
          <button onClick={() => insertText('> ')}>Blockquote</button>
          <button onClick={() => insertText('[', '](https://)')}>Link</button>
          <button onClick={() => insertText('```javascript\n', '\n```')}>Code</button>
          <button onClick={() => insertText('- ')}>List</button>
          <button onClick={() => insertText('==', '==')}>Highlight</button>
          <button onClick={() => insertText('\n&nbsp;\n')}>↵ Xuống dòng</button>

          <select onChange={(e) => setTheme(e.target.value)} value={theme}>
            {Object.keys(THEMES).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <button onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? '🔽 Thu nhỏ' : '⛶ Toàn màn hình'}
          </button>
        </div>
        <div
          className={cx('editor-container', { fullscreen: isFullscreen })}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className={cx("input")}>
            <TextareaAutosize
              ref={textareaRef}
              className={cx('textarea')}
              value={content}
              onChange={handleChange}
              placeholder="Nhập nội dung Markdown hoặc kéo thả ảnh vào đây..."
            />
          </div>

          <div className={cx("preview")}><MarkdownViewer content={content} theme={theme}/></div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
