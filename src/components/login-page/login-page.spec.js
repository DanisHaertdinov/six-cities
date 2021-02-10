import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LoginPage from './login-page';

describe(`login-page`, () => {
  it(`Should render correct user,password inputs and submit button`, () => {
    render(<LoginPage/>);

    const loginInput = screen.getByPlaceholderText(`Email`);
    const passwordInput = screen.getByPlaceholderText(`Password`);
    const submitButton = screen.getByRole(`button`);

    expect(loginInput.type).toEqual(`email`);

    expect(passwordInput.type).toEqual(`password`);

    expect(submitButton.type).toEqual(`submit`);
  });

  describe(`submit button`, () => {
    it(`Should be disabled by default`, () => {
      render(<LoginPage/>);

      const submitButton = screen.getByRole(`button`);

      expect(submitButton).toBeDisabled();
    });

    it(`Should be active if email is valid and password input not empty`, () => {
      render(<LoginPage/>);

      const loginInput = screen.getByPlaceholderText(`Email`);
      const passwordInput = screen.getByPlaceholderText(`Password`);
      const submitButton = screen.getByRole(`button`);

      userEvent.type(loginInput, `testEmail@gmail.com`);
      userEvent.type(passwordInput, `1234`);

      expect(submitButton).not.toBeDisabled();
    });

    it(`Should be disabled if email is not valid or password input is empty`, () => {
      render(<LoginPage/>);

      const loginInput = screen.getByPlaceholderText(`Email`);
      const passwordInput = screen.getByPlaceholderText(`Password`);
      const submitButton = screen.getByRole(`button`);

      userEvent.type(loginInput, `@gmail.com`);
      userEvent.type(passwordInput, `1234`);

      expect(submitButton).toBeDisabled();
    });

    it(`Should be disabled if password input is empty`, () => {
      render(<LoginPage/>);

      const loginInput = screen.getByPlaceholderText(`Email`);
      const passwordInput = screen.getByPlaceholderText(`Password`);
      const submitButton = screen.getByRole(`button`);

      userEvent.type(loginInput, `testEmail@gmail.com`);
      userEvent.type(passwordInput, ``);

      expect(submitButton).toBeDisabled();
    });

    it(`Should call onSubmit with email and password on click if active`, () => {
      const onSubmit = jest.fn();

      render(<LoginPage
        onSubmit={onSubmit}
      />);

      const loginInput = screen.getByPlaceholderText(`Email`);
      const passwordInput = screen.getByPlaceholderText(`Password`);
      const submitButton = screen.getByRole(`button`);

      userEvent.type(loginInput, `testEmail@gmail.com`);
      userEvent.type(passwordInput, `1234`);
      userEvent.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith({email: `testEmail@gmail.com`, password: `1234`});
    });
  });

  it(`Should show alert when server response with error after submit`);
});

