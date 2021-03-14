import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import * as React from 'react';
import Header from './header';
import {User} from '../../types/user';
import {BrowserRouter} from 'react-router-dom';
import {ROUTES} from '../../const/const';


describe(`Header`, () => {
  describe(`user is authorized`, () =>{
    it(`Should render user email`, () => {
      const testUser: User = {
        email: `test@gmail.com`
      };

      render(
          <BrowserRouter>
            <Header
              isAuthorized={true}
              user={testUser}
            />
          </BrowserRouter>
      );

      expect(screen.getByText(`test@gmail.com`)).toBeInTheDocument();
    });

    it(`Should render user email as link to favorites page`, () => {
      const testUser: User = {
        email: `test@gmail.com`
      };

      render(
          <BrowserRouter>
            <Header
              isAuthorized={true}
              user={testUser}
            />
          </BrowserRouter>
      );

      const userLink: HTMLElement = screen.getByRole(`link`, {name: /test@gmail.com/i});

      expect(userLink.getAttribute(`href`)).toBe(ROUTES.FAVORITES);
    });

  });

  describe(`user is not authorized`, () =>{
    it(`Should render login link`, () => {
      const testUser: User = {
        email: `test@gmail.com`
      };

      render(
          <BrowserRouter>
            <Header
              isAuthorized={false}
              user={testUser}
            />
          </BrowserRouter>
      );

      const userLink: HTMLElement = screen.getByRole(`link`, {name: /Sign in/i});
      expect(userLink).toBeInTheDocument();
      expect(userLink.getAttribute(`href`)).toBe(ROUTES.LOGIN);
    });
  });

  it(`Should render logo link to main page`, () => {
    const testUser: User = {
      email: `test@gmail.com`
    };

    render(
        <BrowserRouter>
          <Header
            isAuthorized={false}
            user={testUser}
          />
        </BrowserRouter>
    );

    const logoLink: HTMLElement = screen.getByRole(`link`, {name: /6 cities logo/i});
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.getAttribute(`href`)).toBe(ROUTES.MAIN);
  });
});
