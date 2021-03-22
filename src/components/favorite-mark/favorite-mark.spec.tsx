import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import * as React from 'react';
import FavoriteMark from './favorite-mark';
import {renderWithRouter} from '../../util/test-helpers';
import userEvent from '@testing-library/user-event';
import {ROUTES} from '../../const/const';

describe(`FavoriteMark`, () => {
  it(`Should render as link to login-page prop if "asLink" prop is true`, () => {
    renderWithRouter(
        <FavoriteMark
          asLink={true}
          isActive={true}
          onClick={jest.fn()}
        />
    );

    const favoriteLink = screen.getByRole(`link`, {name: /In bookmarks/i});

    expect(favoriteLink).toBeInTheDocument();
    expect(favoriteLink.getAttribute(`href`)).toBe(ROUTES.LOGIN);
  });

  it(`Should render as button if "asLink" prop is false`, () => {
    renderWithRouter(
        <FavoriteMark
          asLink={false}
          isActive={true}
          onClick={jest.fn()}
        />
    );

    const favoriteButton = screen.getByRole(`button`, {name: /In bookmarks/i});

    expect(favoriteButton).toBeInTheDocument();
  });

  it(`Should render properly if "isActive" prop is true`, () => {
    render(
        <FavoriteMark
          asLink={false}
          isActive={true}
          onClick={jest.fn()}
        />
    );

    const favoriteButton = screen.getByRole(`button`, {name: /In bookmarks/i});

    expect(favoriteButton.classList.contains(`place-card__bookmark-button--active`)).toBe(true);
  });

  it(`Should properly if "isActive" prop is false`, () => {
    render(
        <FavoriteMark
          asLink={false}
          isActive={false}
          onClick={jest.fn()}
        />
    );

    const favoriteButton = screen.getByRole(`button`, {name: /To bookmarks/i});

    expect(favoriteButton.classList.contains(`place-card__bookmark-button--active`)).toBe(false);
  });

  it(`Should call onClick function if rendered as button`, () => {
    const onCLick = jest.fn();

    render(
        <FavoriteMark
          asLink={false}
          isActive={true}
          onClick={onCLick}
        />
    );

    const favoriteButton = screen.getByRole(`button`, {name: /In bookmarks/i});
    userEvent.click(favoriteButton);

    expect(onCLick).toBeCalled();
  });

  it(`Should not call onClick function if rendered as link`, () => {
    const onCLick = jest.fn();

    renderWithRouter(
        <FavoriteMark
          asLink={true}
          isActive={true}
          onClick={onCLick}
        />
    );

    const favoriteButton = screen.getByRole(`link`, {name: /In bookmarks/i});
    userEvent.click(favoriteButton);

    expect(onCLick).not.toBeCalled();
  });
});
