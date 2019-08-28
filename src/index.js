import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "@store"
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={App} />
        </HashRouter>
    </Provider>,
    document.getElementById('root'));

