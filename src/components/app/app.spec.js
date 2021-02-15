import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRouter} from "../../util/test-helpers";
import App from './app';
import {screen} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from '../../store/reducer';

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
