import React, { Component } from 'react';
import Header from './component/header/index';
import Headline from './component/headline';
import './App.scss'


const tempArr = [{
  fName: "Md",
  lName: "Irfan",
  email: "mdirfan844@gmail.com",
  age: 27,
  onlineStatus: true
}]
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
        </section>

      </div>
    );
  }
}

export default App;
