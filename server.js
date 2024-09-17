const express = require('express');
const { marked } = require('marked'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
  try {
    const { markdown } = req.body;
    
    // Check if markdown content exists in request body
    if (!markdown) {
      return res.status(400).send({ error: 'Markdown content is required.' });
    }

    // Convert markdown to HTML
    const html = marked(markdown);
    res.send({ html });
  } catch (error) {
    console.error('Error during Markdown conversion:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
