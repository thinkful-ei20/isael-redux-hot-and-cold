import React from 'react';
import ReactDOM from 'react-dom';
import * as action from './actions';
import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

store.dispatch(action.makeGuess('33'));
console.log(store.getState());
store.dispatch(action.restartGame('33'));
console.log(store.getState());
store.dispatch(action.generateAuralUpdate('hello'));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
