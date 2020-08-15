import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "@babel/polyfill";

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {

  React.useEffect(() => {
    injectScript('https://www.goat1000.com/tagcanvas.js');
  });

  const injectScript = url => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
  }

  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Router>
  )
}

export default App;