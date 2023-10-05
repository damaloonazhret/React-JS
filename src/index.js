import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
