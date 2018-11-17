import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Projects from "./Components/Projects";
import Contact from './Components/Contact/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/Projects" component={Projects}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
