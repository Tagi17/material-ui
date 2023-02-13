import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'; //1 file in ur app needs to import ReactDom and line 6

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
); //need to render a component called App which is main component of the app, it will be rendered to the DOM

