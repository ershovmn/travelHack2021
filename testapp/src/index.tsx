import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import Header from './Components/Header';
import Signup from './Components/Signup';
import RedirectPage from './Components/RedirectPage';
import AboutMe from './Components/AboutMe';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/redirect' exact component={RedirectPage} />
                <Route path='/aboutme' exact component={AboutMe} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
