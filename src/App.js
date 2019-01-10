import React, { Component,Fragment } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search />
        <Home />
      </Fragment>
    );
  }
}

export default App;
