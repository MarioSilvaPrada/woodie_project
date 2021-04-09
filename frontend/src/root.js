import React from 'react';
import { render } from 'react-dom';

import regeneratorRuntime from 'regenerator-runtime'; //to use async await

import Index from './index';

// Components
const rootElement = document.getElementById('root');

render(<Index />, rootElement);
