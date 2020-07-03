import React from 'react';
import './App.css';
import Hangman from './components/Hangman'

function App() {
  return (
    <div className="App">
      <Hangman />
      <footer>
        &copy; Jane Girshin 2020
      </footer>
    </div>
  );
}

export default App;
