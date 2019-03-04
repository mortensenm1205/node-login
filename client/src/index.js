import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory }  from 'history';
import { Base } from './app/css';
import store from './config/store';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Provider store={store}>
            {/* Base is our global styles, however this doesn't render children so treat it as an indivdual, seperate comp */}
            <Base />
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

serviceWorker.unregister();
