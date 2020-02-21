import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = store => next => action => {
//   console.log('prev state ', store.getState());
//   console.log('action: ', action);
//   next(action);
//   console.log('new state ', store.getState());
// };

// const applyMiddlewares = (store, ...middles) => {
//   let dispatch = store.dispatch;
//   middles.forEach(middle => {
//     dispatch = middle(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch })
// };