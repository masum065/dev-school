import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Courses />
    </div>
  );
}

export default App;
