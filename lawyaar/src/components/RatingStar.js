// App.js

import React, { useState } from 'react';
import RatingStar from './RatingStar';

const App = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    console.log('New Rating:', newRating);
    // You can perform any additional actions here based on the new rating
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Rate this component:</h1>
      <RatingStar initialRating={rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default App;
