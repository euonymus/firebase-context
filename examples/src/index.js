import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ProviderComposer from './providers/provider-composer';
// components
import Initializer from './initializer';

ReactDOM.render (
  <ProviderComposer>
    <Initializer />
  </ProviderComposer>,
  document.getElementById('root')
)



