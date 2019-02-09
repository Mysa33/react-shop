import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import Cart from './pages/cart';
import * as serviceWorker from './serviceWorker';

export const routing = (
  <Router>
    <div className="container-fluid">
      <div className="header-container fixed-top">
        <div className="container">
          <header>
            <nav className="navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/">
                  <i className="material-icons">

                  home

                  </i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
