import React, { Component } from 'react';

//Components
import Home from './components/home';
import NavigationBar from './components/navbar';
import MerchBanner from './components/merchbanner';
//CSS
import './styles/home.css';
import './styles/variables.css';
import './styles/navbar/navbar.css';
import './styles/merchbanner/merchbanner.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />
      <Home />
      </div>
    );
  }
}

export default App;
