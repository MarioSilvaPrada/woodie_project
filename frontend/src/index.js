import React, { useState, useEffect } from 'react';

import './index.css';
import { getSettings } from 'api/settings';
import { getProducts, getCollections } from 'api/products';
import { getReservationOptions } from 'api/reservations';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// Pages
import App from './routes/App/App';
import Galeria from './routes/Galeria';
import Sobre from './routes/Sobre';
import Contactos from './routes/Contactos';
import ProductPage from './routes/ProductPage';
import PageNotFound from './routes/PageNotFound/PageNotFound';
// Components
import NavBar from 'components/NavBar/NavBar';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [styleSettings, setStyleSettings] = useState({});
  const [options, setOptions] = useState(null);

  const [collections, setCollections] = useState([]);
  const [articles, setArticles] = useState([]);

  const getCollectionName = (id) => {
    for (const collection of collections) {
      if (collection.id === id) {
        return collection.name;
      }
    }
  };

  const fetchData = async () => {
    const res = await getSettings();
    const myCollections = await getCollections();
    const myProducts = await getProducts();
    const myOptions = await getReservationOptions();

    setStyleSettings(res[0]);
    setCollections(myCollections);
    setArticles(myProducts);
    setOptions(myOptions);

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
            path='/loja'
            component={() => (
              <Galeria articles={articles} collections={collections} />
            )}
          />
          <Route
            exact
            path='/artigo/:id'
            component={() => (
              <ProductPage
                options={options}
                getCollectionName={getCollectionName}
              />
            )}
          />
          <Route exact path='/sobre' component={Sobre} />
          <Route
            exact
            path='/contactos'
            component={() => <Contactos logo={styleSettings.logo} />}
          />
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
