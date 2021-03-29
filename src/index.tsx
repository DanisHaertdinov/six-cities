import {configureStore} from '@reduxjs/toolkit';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.container';
import rootReducer from './store/reducer';

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
