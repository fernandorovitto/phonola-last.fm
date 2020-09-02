// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path='./index.d.ts'/>
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';

import Main from './main';
import React from 'react';
import ReactDOM from 'react-dom';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Main store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
