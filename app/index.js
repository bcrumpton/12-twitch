import 'whatwg-fetch';
import data from './data';
import addGamesToList from './twitch/add-games-to-list';
import createGameElement from './twitch/create-game-element';

// Look up a `ul` element with a class called `results`
const results = document.querySelector('ul.results');
// Add games to the results list based on the data from `data.json`
const list = addGamesToList(results, data.top);
