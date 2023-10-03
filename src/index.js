import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let postData = [
    {id: 1, message: 'Hi, how are you?', like: 18},
    {id: 2, message: `It's my first post`, like: 11},
    {id: 3, message: 'La la la?', like: 12},
    {id: 4, message: 'Bla bla bla?', like: 13},
    {id: 5, message: 'Yooouuu', like: 14},
    {id: 5, message: 'Yoooooouuuuu', like: 12},
]

export let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Onfire'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Kosmodrom'},
    {id: 5, name: 'Duyshiy'},
    {id: 5, name: 'Severniy'},
]

export let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'John'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yooo'},
    {id: 5, message: 'Yoooooo'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
