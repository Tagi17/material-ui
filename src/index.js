import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";

import App from './App';
import React from 'react';

ReactDOMClient.createRoot(
    document.getElementById('root'),
)
    .render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <App /> }></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
); //need to render a component called App which is main component of the app, it will be rendered to the DOM

