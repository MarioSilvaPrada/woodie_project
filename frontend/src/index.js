import React from 'react';
import { render } from 'react-dom';

import regeneratorRuntime from "regenerator-runtime"; //to use async await

// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import App from './routes/App/App';
import theme from './theme/';
// Pages
import Page1 from './routes/Page1/Page';
import Page2 from './routes/Page2/Page';
import PageNotFound from './routes/PageNotFound/PageNotFound';

// Components
const rootElement = document.getElementById('root');
const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/1' component={Page1} />
        <Route exact path='/2' component={Page2} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

render(root, rootElement);
