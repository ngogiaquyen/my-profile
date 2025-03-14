import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TextareaAutosize from 'react-textarea-autosize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './MarkdownViewer.module.scss';
import classNames from 'classnames/bind';
import { BASE_URL, BASE_URL_IMG, postData } from '~/helper/apiService';
import { oneDark, dracula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkBreaks from 'remark-breaks';
import { THEMES } from '../MarkdownEditor/MarkdownEditor';

const cx = classNames.bind(styles);

function MarkdownViewer({content, theme="oneDark"}) {
    return ( 
        <div className={cx('wrapper')}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            code({ node, inline, className, children, ...props }) {
              console.log(inline, className, children)
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter style={THEMES[theme]} language={match[1]} PreTag="div" {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            img: ({ node, src, ...props }) => (
              <img
                {...props}
                src={BASE_URL_IMG + src}
                style={{ maxWidth: '100%', borderRadius: '8px' }}
                alt="Hình ảnh"
              />
            ),
          }}
          skipHtml={false}
          remarkRehypeOptions={{ allowDangerousHtml: true }}
        />
      </div>
     );
}

export default MarkdownViewer;