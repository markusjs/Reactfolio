import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory'

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
} from 'react-router-dom';
const history = createBrowserHistory();


ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

var touch = 'ontouchstart' in document.documentElement
    || navigator.maxTouchPoints > 0
    || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}