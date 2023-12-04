import './App.css';
import React, { useState } from 'react';
import axios from 'axios'; // connect with backend

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  // API connect with backend
  async function handleScrape() {
    try {
      //send post request to the server
      const response = await axios.post('http://localhost:5000/scrape', url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setResult(response.data.result);
    } catch (error) {
      console.log('Error scraping:', error);
    }
  }
  return (
    <div className="main">
      <div className="url--section">
        <h1>Web Scraping content generator</h1>
        <label for="text">Enter URL:</label>
        <br />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleScrape}>Scrape Website</button>
      </div>
      <div className="result">Scraping result: {result}</div>
    </div>
  );
}

export default App;
