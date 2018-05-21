import React from 'react';
import ReactDOM from 'react-dom';
// import * as action from './actions';
import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';
import {Provider} from 'react-redux';

// store.dispatch(action.makeGuess('33'));
// console.log(store.getState());
// store.dispatch(action.restartGame('33'));
// console.log(store.getState());
// store.dispatch(action.generateAuralUpdate('hello'));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
