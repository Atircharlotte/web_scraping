import './App.css';
import React, { useState } from 'react';
import axios from 'axios'; // connect with backend
import Intro from './elements/intro';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  // API connect with backend
  async function handleScrape() {
    try {
      //send post request to the server
      const response = await axios.post(
        'http://localhost:9000/scrape',
        { url: url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.log('Error scraping:', error);
    }
  }
  return (
    <div className="main">
      <h1 className="title">WebHarvestWizard</h1>
      {/*url input section */}
      <div className="url--section">
        <div className="top--section">
          <div className="left">
            <h1>Magic!</h1>
            <label htmlFor="url">Enter one URL:</label>
            <input
              id="url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <br />
            <button onClick={handleScrape}>BOOM!</button>
            {/*display scraping outcome */}
            <div className="scraping--result">
              <h1>Show Time!</h1>
              <h4>title:</h4> {result}
            </div>
          </div>

          {/*introduction section */}
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default App;
