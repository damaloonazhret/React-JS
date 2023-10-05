import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/reduxStore";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    // debugger
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>
                {/*<App store={store}/>*/}
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
})

reportWebVitals();
