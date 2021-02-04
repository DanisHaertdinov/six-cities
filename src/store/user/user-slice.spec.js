import user, {authorize} from "./user-slice";

describe(`user reducer`, () => {
  it(`Should handle initial state`, () => {
    expect(user(undefined, {})).toEqual({
      isAuthorized: false,
      info: {
        email: ``
      }
    });
  });

  it(`Should handle AUTHORIZE`, () => {
    expect(user(
        {
          isAuthorized: false,
          info: {
            email: ``
          }
        }, {
          type: authorize.type,
          payload: `test@gmail.com`
        })).toEqual(
        {
          isAuthorized: true,
          info: {
            email: `test@gmail.com`
          }
        }
    );
  });
});
