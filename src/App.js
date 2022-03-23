import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
