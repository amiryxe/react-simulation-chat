import React from 'react';
import Chat from './pages/Chat';
import MainState from './context/MainState';
import './App.css';

function App() {
  return (
    <MainState>
      <div className='App'>
        <Chat />
      </div>
    </MainState>
  );
}

export default App;
