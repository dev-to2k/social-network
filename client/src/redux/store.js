import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line comma-dangle
  composeWithDevTools(applyMiddleware(thunk))
);

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default DataProvider;
