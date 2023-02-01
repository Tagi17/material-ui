import React from 'react';
import ReactDOM from 'react-dom'; //1 file in ur app needs to import ReactDom and line 6


import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); //need to render a component called App which is main component of the app, it will be rendered to the DOM

