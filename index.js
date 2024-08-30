import React from "react";
import ReactDom from 'react-dom';
import TodoList from "./TodoList";
import reportWebVitals from './reportWebVitals';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <TodoList/>
    </React.StrictMode>
)
reportWebVitals();