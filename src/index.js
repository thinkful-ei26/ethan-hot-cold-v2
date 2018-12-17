import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';

import { enterGuess, newGame, openWhat, closeWhat } from './actions/index';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);

// console.log(store);
// console.log(store.getState());

// store.dispatch(enterGuess('2'));
// console.log(store.getState());

// store.dispatch(enterGuess('9'));
// console.log(store.getState());

// store.dispatch(enterGuess('17'));
// console.log(store.getState());

// store.dispatch(enterGuess('22'));
// console.log(store.getState());

// store.dispatch(enterGuess('92'));
// console.log(store.getState());

// // store.dispatch(enterGuess(2));
// // console.log(store.getState());

// // store.dispatch(enterGuess('foo'));
// // console.log(store.getState());

// store.dispatch(newGame());
// console.log(store.getState());


// store.dispatch(openWhat());
// console.log(store.getState());


// store.dispatch(closeWhat());
// console.log(store.getState());


// console.log(store.getState());

