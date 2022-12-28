import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //npm i react-redux
import App from './App';
import { store } from './State/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);

// https://github.com/balajibetadur/Demo/tree/master/FE9/yummy