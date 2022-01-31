import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="posts" desc="Click the button to render posts!" />
      </section>

    </div>
  );
}

export default App;
