import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory }  from 'history'
import store from './config/store';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
