import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './components/BookInstance.js';

//Practice Code
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let myList = [];
for(let i = 0; i < 10; i++){
  myList.push(<Book name="Crazy Book" desc="This book is supposed to be very crazy."/>);
}

root.render(myList);