import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Lawyer from './components/Lawyer';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawyer" element={

            <Lawyer
              pfp='https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png'
              name='Saul Goodman'
              location='Albuquerque, New Mexico'
              lang="English, Hindi, Oriya" />

          }

          />


        </Routes>
      </Router>
      <Lawyer
        pfp='https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png'
        name='Saul Goodman'
        location='Albuquerque, New Mexico'
        lang="English, Hindi, Oriya" />

      <Lawyer
        pfp='https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png'
        name='Saul Goodman'
        location='Albuquerque, New Mexico'
        lang="English, Hindi, Oriya" />

      <Lawyer
        pfp='https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png'
        name='Saul Goodman'
        location='Albuquerque, New Mexico'
        lang="English, Hindi, Oriya" />
    </div>
  );
}

export default App;


