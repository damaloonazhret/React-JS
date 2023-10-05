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
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();
