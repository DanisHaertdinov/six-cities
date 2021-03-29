import {configureStore} from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducer';
import {renderWithRouter} from '../../util/test-helpers';
import App from './app';

describe(`app`, () => {
  it(`Should render login page if user unauthorized to "/login" path`, () => {
    const mockStore = configureStore({
      reducer: rootReducer
    });

    renderWithRouter(
        <Provider store={mockStore}>
          <App
            isUserAuthorized={false}
          />
        </Provider>,
        {route: `/login`}
    );

    expect(screen.getByRole(`heading`, {name: /sign in/i})).toBeInTheDocument();
  });

  it(`Should render main page if user unauthorized  to "login" path`, () => {
    renderWithRouter(
        <App
          isUserAuthorized={true}
        />,
        {route: `/login`}
    );

    expect(screen.getByRole(`heading`, {name: /main page/i})).toBeInTheDocument();
  });

});
