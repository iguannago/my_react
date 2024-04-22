import { useEffect, useState } from 'react';

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        setImageUrl(response.url);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
        <h1>This is my Reactjs playground!</h1>
      </div>
    </div>
  );
};

export default Home;
