import React, { useEffect, useState } from 'react';
import {marked} from 'marked';

const MarkdownPreview = ({ markdown }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(marked(markdown));
  }, [markdown]);

  return (
    <div
      style={{ width: '50%', height: '100vh', overflow: 'auto', padding: '10px' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownPreview;
