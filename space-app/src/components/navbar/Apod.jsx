import { useState, useEffect } from 'react';
import Progress from './Progress.jsx';
import './Apod.css'

const DATA_URL = 'http://api.nasa.gov/planetary/apod?api_Key=DEMO_KEY';


import React, { useEffect, useState } from 'react';

const Apod = () => {
  const [Apod, setApo] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`) 
      .then(response => response.json())
      .then(data => setApo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!Apod) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', paddingTop: '60px' }}>
      <h1>Foto del día Nasa</h1>
      <h2>{Apod.title}</h2>
      <p>{Apod.date}</p>
      <img src={Apod.url} alt={Apod.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{Apod.explanation}</p>
    </div>
  );
};

export default Apod;
