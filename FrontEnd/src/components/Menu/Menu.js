import React from 'react';
import './Menu.css';

const MENU_TRANSLATIONS = {
  English: {
    home: 'Home',
    movies: 'Movies',
    tvShows: 'TV Shows',
    sports: 'Sports',
    live: 'Live'
  },
  French: {
    home: 'Accueil',
    movies: 'Films',
    tvShows: 'Émissions TV',
    sports: 'Sports',
    live: 'Direct'
  },
  German: {
    home: 'Startseite',
    movies: 'Filme',
    tvShows: 'TV-Shows',
    sports: 'Sport',
    live: 'Live',
  },
  Russian: {
    home: 'Домой',
    movies: 'Фильмы',
    tvShows: 'Телешоу',
    sports: 'Спорт',
    live: 'Прямой эфир',
  },
  Spanish: {
    home: 'Inicio',
    movies: 'Películas',
    tvShows: 'Programas de TV',
    sports: 'Deportes',
    live: 'En Vivo',
  },
  Chinese: {
    home: '首页',
    movies: '电影',
    tvShows: '电视节目',
    sports: '体育',
    live: '直播',
  },
};

const Menu = ({ currentLanguage }) => {
  const translations = MENU_TRANSLATIONS[currentLanguage] || MENU_TRANSLATIONS['English'];

  return (
    <div className="menu">
      <div className="menu-item" id="home">
        <img src="/images/home.jpg" alt="Home" className="menu-image" />
        <div className="overlay">{translations.home}</div>
      </div>
      <div className="menu-item" id="movies">
        <img src="/images/movies.jpg" alt="Movies" className="menu-image" />
        <div className="overlay">{translations.movies}</div>
      </div>
      <div className="menu-item" id="tvShows">
        <img src="/images/tvShows.jpg" alt="TV Shows" className="menu-image" />
        <div className="overlay">{translations.tvShows}</div>
      </div>
      <div className="menu-item" id="sports">
        <img src="/images/sports.jpg" alt="Sports" className="menu-image" />
        <div className="overlay">{translations.sports}</div>
      </div>
      <div className="menu-item" id="live">
        <img src="/images/live.jpg" alt="Live" className="menu-image" />
        <div className="overlay">{translations.live}</div>
      </div>
    </div>
  );
};

export default Menu;

