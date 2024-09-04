import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Sports from './pages/Sports';
import Live from './pages/Live';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="app">
        <Settings currentLanguage={language} onLanguageChange={handleLanguageChange} />
        <Switch>
          <Route exact path="/" component={() => <Menu currentLanguage={language} />} />
          <Route path="/home" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows" component={TVShows} />
          <Route path="/sports" component={Sports} />
          <Route path="/live" component={Live} />
          <Route path="*" component={() => <div>Page Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
