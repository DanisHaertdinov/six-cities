import '@testing-library/jest-dom/extend-expect';

describe(`MainPage`, () => {
  it(`Should render offers list`);

  it(` Render first city as active by default`);

  it(`Should render a map with active city offers`);

  it(`Should render proper cities list title`);

  it(`Change active city on city tab click`);

  it(`Rerender a map with proper offers on active city change`);

  it(`Rerender a offers list with proper offers on active city change`);

  it(`Should rerender cities list properly on active city change`);

  it(`Should render sorting component`);

  it(`Render "Popular" sorting type as active by default`);

  describe(`Sorting types`, () => {
    it(`Should properly render offers list when chosen sorting type is "Popular"`);

    it(`Should properly render offers list when chosen sorting type is "Price: low to high"`);

    it(`Should properly render offers list when chosen sorting type is "Price: high to low"`);

    it(`Should properly render offers list when chosen sorting type is "Top rated first"`);
  });
});
