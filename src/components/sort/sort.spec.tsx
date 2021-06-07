import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {noop} from '../../util/util';
import Sort, {ACTIVE_CLASS_NAME, SORT_TEST_ID} from './sort';

const SORT_TYPES = [`Popular`, `Cost`, `Rating`, `TestType`];

describe(`Sort`, () => {
  it(`Should not show sorting list by default`, () => {
    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[1]}
          onClick={noop}
        />
    );

    expect(screen.queryByRole(`list`)).not.toBeInTheDocument();
  });

  it(`Should toggle sorting list after click`, () => {
    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[1]}
          onClick={noop}
        />
    );

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    expect(screen.queryByRole(`list`)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    expect(screen.queryByRole(`list`)).not.toBeInTheDocument();
  });

  it(`Should properly render sorting list`, () => {
    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[1]}
          onClick={noop}
        />
    );

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    const sortingItems = screen.getByRole(`list`).childNodes;
    const renderedSortingTypes = Array.from(sortingItems).map((sortingItem) => sortingItem.textContent);

    expect(renderedSortingTypes).toEqual(SORT_TYPES);
  });

  it(`Should show active sorting type`, () => {
    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[2]}
          onClick={noop}
        />
    );

    expect(screen.getByText(SORT_TYPES[2])).toBeInTheDocument();
  });

  it(`Should add active className to active sorting item`, () => {
    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[1]}
          onClick={noop}
        />
    );

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    const sortingItems = screen.getByRole(`list`).children;
    const activeSortingItem = Array.from(sortingItems).find((sortingItem) => sortingItem.textContent === SORT_TYPES[1]);

    expect(activeSortingItem.classList.contains(ACTIVE_CLASS_NAME)).toBe(true);
  });

  it(`Should return sort type on sorting item clicked`, () => {
    const onClick = jest.fn();

    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[0]}
          onClick={onClick}
        />
    );

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    let sortingItems = screen.getByRole(`list`).children;

    userEvent.click(sortingItems[1]);

    expect(onClick).toBeCalledWith(SORT_TYPES[1]);

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    sortingItems = screen.getByRole(`list`).children;

    userEvent.click(sortingItems[3]);

    expect(onClick).toBeCalledWith(SORT_TYPES[3]);
  });

  it(`Should ignore onClick when active sortItem clicked`, () => {
    const onClick = jest.fn();

    render(
        <Sort
          sortTypes={SORT_TYPES}
          activeSortType={SORT_TYPES[1]}
          onClick={onClick}
        />
    );

    userEvent.click(screen.getByTestId(SORT_TEST_ID));
    const sortingItems = screen.getByRole(`list`).children;

    userEvent.click(sortingItems[1]);

    expect(onClick).not.toBeCalled();
  });
});
