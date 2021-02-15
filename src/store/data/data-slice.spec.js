import {offers} from '../../test-data';
import data from './data-slice';

describe(`data reducer`, () => {
  it(`Should handle initial state`, () => {
    expect(data(undefined, {})).toEqual({
      offers
    });
  });
});
