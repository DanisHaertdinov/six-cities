import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import CitiesList, {ACTIVE_CLASS_NAME} from './cities-list'
import {noop} from '../../util/util';

const CITIES = [`Paris`, `Moscow`, `Cologne`, `Test`, `Laos`]

describe(`CitiesList`, () => {
 it(`Should render cities`, () => {
   render(
   <CitiesList
     citiesNames={CITIES}
     activeCityName={CITIES[0]}
     onClick={noop}
   />
   )

   for (const city of CITIES) {
     expect(screen.getByRole('link', { name: city })).toBeInTheDocument();
   }
 })

  it(`Should add active className to active city `, () => {
    render(
      <CitiesList
        citiesNames={CITIES}
        activeCityName={CITIES[3]}
        onClick={noop}
      />
    )

    expect(screen.getByRole('link', { name: CITIES[3] }).classList.contains(ACTIVE_CLASS_NAME)).toBe(true)
  })

  it(`Should return city name when inactive city is clicked`, () => {
    const onClick = jest.fn();

    render(
      <CitiesList
        citiesNames={CITIES}
        activeCityName={CITIES[3]}
        onClick={onClick}
      />
    )

    userEvent.click(screen.getByRole('link', { name: CITIES[2] }));
    expect(onClick).lastCalledWith(CITIES[2]);

    userEvent.click(screen.getByRole('link', { name: CITIES[0] }));
    expect(onClick).lastCalledWith(CITIES[0]);
  })

  it(`Should ignore onClick when active city clicked`, () => {
    const onClick = jest.fn();

    render(
      <CitiesList
        citiesNames={CITIES}
        activeCityName={CITIES[3]}
        onClick={onClick}
      />
    )

    userEvent.click(screen.getByRole('link', { name: CITIES[3] }));
    expect(onClick).not.toBeCalled();
  })
});
