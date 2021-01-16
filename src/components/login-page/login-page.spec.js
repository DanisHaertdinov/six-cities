import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './login-page';
import userEvent from '@testing-library/user-event';

const setup = () => {
  render(<LoginPage/>);

  const inputLogin = screen.getByPlaceholderText(`Email`);
  const inputPassword = screen.getByPlaceholderText(`Password`);
  const submitButton = screen.getByRole(`button`);

  return {inputLogin, inputPassword, submitButton};
};

describe(`login-page`, () => {
  it(`Should render correct user,password input and submit button`, () => {
    const {inputLogin, inputPassword, submitButton} = setup();

    expect(inputLogin.type).toEqual(`email`);

    expect(inputPassword.type).toEqual(`password`);

    expect(submitButton.type).toEqual(`submit`);
  });

  it(`Submit button: should be disabled by default`, () => {
    const {submitButton} = setup();
    expect(submitButton).toBeDisabled();
  });

  it(`Submit button: should be active if email is valid and password input not empty`, () => {
    const {inputLogin, inputPassword, submitButton} = setup();

    userEvent.type(inputLogin, `testEmail@gmail.com`);
    userEvent.type(inputPassword, `1234`);
    expect(submitButton).not.toBeDisabled();
  });

  it(`Submit button: should be disabled if email is not valid or password input is empty`, () => {
    const {inputLogin, inputPassword, submitButton} = setup();

    userEvent.type(inputLogin, `testEmail@gmail.com`);
    userEvent.type(inputPassword, ``);
    expect(submitButton).toBeDisabled();

    userEvent.type(inputLogin, `@gmail.com`);
    userEvent.type(inputPassword, `1234`);
    expect(submitButton).toBeDisabled();
  });

  it(`Should send request to server on submit button clicked`);

  it(`Should show alert when server response whith error after submit`);
});
