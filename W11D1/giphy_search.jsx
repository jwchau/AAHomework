import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys, fetchReceiveGiphys } from './actions/giphy_actions';

document.addEventListener("DOMContentLoaded", () => {
    const r = document.getElementById("root");

    //create store
    const store = configureStore();
    window.store = store;
    //render react element taking over the html element with "#root"
    ReactDOM.render(<Root store={store} />, root);
});