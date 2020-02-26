import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import * as pa from "./actions/post_actions";

/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchPosts = pa.fetchPosts;
    // debugger

    ReactDOM.render(<Root store={store} />, root);
});