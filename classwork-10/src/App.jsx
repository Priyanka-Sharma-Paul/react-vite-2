import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const searchImages = async () => {
    if (!query) return;
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, per_page: 10 },
        headers: {
          Authorization: `Client-ID I8RTpjUlmN_RbieiK0LX3gl81V0b6G8JcqkfQPQ_7xg`, // Replace with your Unsplash Access Key
        },
      });
      setImages(response.data.results);
      setError('');
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
      setImages([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <div className="App">
      <h1>AI Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <ImageDisplay images={images} />
    </div>
  );
};

export default App;
