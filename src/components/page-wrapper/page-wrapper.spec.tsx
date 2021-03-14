import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import * as React from 'react';
import PageWrapper from './page-wrapper';


describe(`PageWrapper`, () => {
  it(`Should render children component`, () => {
    render(
        <PageWrapper location={`/`}>
          <h1>test children</h1>
        </PageWrapper>);

    expect(screen.getByText(`test children`)).toBeInTheDocument();
  });

  it(`Should render with specific classNames if location is '/'`, () => {
    render(
        <PageWrapper location={`/`}>
          <h1>test children</h1>
        </PageWrapper>);

    const pageWrapper = screen.getByTestId(`page-wrapper`);

    expect(pageWrapper.classList.contains(`page--gray`)).toBe(true);
    expect(pageWrapper.classList.contains(`page--main`)).toBe(true);
  });

  it(`Should render with specific classNames if location is '/login'`, () => {
    render(
        <PageWrapper location={`/login`}>
          <h1>test children</h1>
        </PageWrapper>);

    const pageWrapper = screen.getByTestId(`page-wrapper`);

    expect(pageWrapper.classList.contains(`page--gray`)).toBe(true);
    expect(pageWrapper.classList.contains(`page--login`)).toBe(true);
  });

  it(`Should render with default classNames for any location'`, () => {
    render(
        <PageWrapper location={`/test`}>
          <h1>test children</h1>
        </PageWrapper>);

    const pageWrapper = screen.getByTestId(`page-wrapper`);

    expect(pageWrapper.classList.contains(`page`)).toBe(true);
  });

});
