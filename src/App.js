import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // Make HTTP request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      setItems(result.data);
      setisLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
