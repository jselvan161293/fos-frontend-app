import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateArticle from './containers/CreateArticle';
import Post from './containers/Post';

function App() {
  return (

    <Router>
      <div className="App">
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/create-article"  component={CreateArticle}/>

        
      </div>
    </Router>
    
  );
}

export default App;
