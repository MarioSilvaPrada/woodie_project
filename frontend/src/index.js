import React, { useState, useEffect } from 'react';

import './index.css';
import { getSettings } from 'api/settings';
import { getProducts } from 'api/products';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './routes/App/App';
import theme from './theme';
// Pages
import Galeria from './routes/Galeria';
import Page2 from './routes/Page2/Page';
import ProductPage from './routes/ProductPage';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import NavBar from 'components/NavBar/NavBar';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [styleSettings, setStyleSettings] = useState({});

  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const res = await getSettings();
    const myProducts = await getProducts();

    setStyleSettings(res[0]);
    setArticles(myProducts);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return !isLoading ? (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar logo={styleSettings.logo} />
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <App
                backImg={styleSettings.main_background}
                articles={articles}
              />
            )}
          />
          <Route
            exact
            path='/galeria'
            component={() => <Galeria articles={articles} />}
          />
          <Route exact path='/artigo/:id' component={ProductPage} />
          <Route exact path='/2' component={Page2} />
          <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer logo={styleSettings.logo} />
      </Router>
    </ThemeProvider>
  ) : (
    <Spinner />
  );
};

export default Index;
