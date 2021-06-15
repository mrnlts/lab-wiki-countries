import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      ReactDOM.render(
        <BrowserRouter>
          <App countries={ res.data}/>
        </BrowserRouter>,
        document.getElementById('root')
      )
    })


reportWebVitals();
