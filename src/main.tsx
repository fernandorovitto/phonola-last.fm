import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import * as React from 'react';
import { ApplicationState } from '@Store/index';
import { History } from 'history';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { Store } from 'redux';

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const Main: React.FC<MainProps> = ({ store, history }: MainProps) => (
  <Provider store={store}>
    <ReduxToastr
      timeOut={9000}
      newestOnTop={true}
      preventDuplicates={true}
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar={true}
      closeOnToastrClick={true}
    />
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

export default Main;
