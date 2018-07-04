import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import App from './App';
import { JwtService } from '@sensenet/authentication-jwt';
import { Repository } from '@sensenet/client-core';
import { Reducers, Store } from '@sensenet/redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Init Redux:
const sensenet = Reducers.sensenet;
const myReducer = combineReducers({
  sensenet
  // new added reducer
});

const repository = new Repository({
  repositoryUrl: process.env.REACT_APP_SERVICE_URL || 'https://rorweb'
  // repositoryUrl: process.env.REACT_APP_SERVICE_URL || 'https://knowledgebase-sn7.test.sensenet.com'
});

const options = {
  repository,
  rootReducer: myReducer,
} as Store.CreateStoreOptions;

const store = Store.createSensenetStore(options);

// Init JWT authentication
const jwtService = new JwtService(repository);
jwtService.checkForUpdate();

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
