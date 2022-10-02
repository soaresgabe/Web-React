import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/__note__/CreateNote';
import notes from './notes'

function App() {
  return (
    <div>
      <Header/>
      {notes.map(CreateNote)}
      <Footer/> 
    </div>
  );
}

export default App;