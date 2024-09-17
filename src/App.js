import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await axios.post('http://localhost:5000/convert', { markdown });
        setHtml(response.data.html);
      } catch (error) {
        console.error('Error converting markdown:', error);
      }
    };

    convertMarkdown();
  }, [markdown]);

  return (
    <div style={{ display: 'flex' }}>
      <textarea
        style={{ width: '50%', height: '100vh' }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />
      <div
        style={{ width: '50%', height: '100vh', overflow: 'auto', padding: '10px' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default App;
