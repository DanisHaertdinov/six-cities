import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import React from 'react';
import OfferPage from './offer-page';

describe(`offer-page`, () => {
  it(`Should render offer photos`, () => {
    const photos = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`];
    const picturesTestOffer = {
      ...offers[0],
      photos
    };

    render(<OfferPage
      offer = {picturesTestOffer}
    />);

    const renderedPhotosUrls = screen.getAllByAltText(`Photo studio`).map((photo) => photo.getAttribute(`src`));

    expect(renderedPhotosUrls).toEqual(photos);

  });

  it(`Should maximum render six photos`, () => {
    const photos = [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`
    ];
    const picturesTestOffer = {
      ...offers[0],
      photos
    };

    render(<OfferPage
      offer = {picturesTestOffer}
    />);

    const renderedPhotos = screen.getAllByAltText(`Photo studio`);

    expect(renderedPhotos.length).toEqual(6);
  });

  it(`Should render offer title as first level heading`, () => {
    const title = `Test Offer Title`;
    const titleTestOffer = {
      ...offers[0],
      title,
    };

    render(<OfferPage
      offer = {titleTestOffer}
    />);

    const renderedTitle = screen.getByText(`Test Offer Title`);

    expect(renderedTitle.tagName).toEqual(`H1`);
  });

  it(`Should render offer description`, () => {
    const description = `Test Offer Description Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor Test`;
    const descriptionTestOffer = {
      ...offers[0],
      description,
    };

    render(<OfferPage
      offer = {descriptionTestOffer}
    />);

    const renderedDescription = screen.getByText(description);

    expect(renderedDescription);
  });

  it(`Should render offer premium mark if offer is premium`, () => {
    const isPremium = true;
    const premiumTestOffer = {
      ...offers[0],
      isPremium,
    };

    render(<OfferPage
      offer = {premiumTestOffer}
    />);

    const premiumMark = screen.queryByText(`Premium`);

    expect(premiumMark).not.toEqual(null);
  });

  it(`Should not render offer premium mark if offer is not premium`, () => {
    const isPremium = false;
    const premiumTestOffer = {
      ...offers[0],
      isPremium,
    };

    render(<OfferPage
      offer = {premiumTestOffer}
    />);

    const premiumMark = screen.queryByText(`Premium`);

    expect(premiumMark).toEqual(null);
  });

  it(`Should render capitalized offer type`, () => {
    let type = `house`;
    let typeTestOffer = {
      ...offers[0],
      type,
    };

    const {rerender} = render(<OfferPage
      offer = {typeTestOffer}
    />);

    let renderedType = screen.queryByText(`House`);

    expect(renderedType).not.toEqual(null);

    type = `hotel`;
    typeTestOffer = {
      ...offers[0],
      type,
    };

    rerender(<OfferPage
      offer = {typeTestOffer}
    />);

    renderedType = screen.queryByText(`Hotel`);

    expect(renderedType).not.toEqual(null);
  });

  it(`Should render offer rating`, () => {
    const rating = 1.7;
    const ratingTestOffer = {
      ...offers[0],
      rating,
    };

    render(<OfferPage
      offer = {ratingTestOffer}
    />);

    const renderedRating = screen.queryByText(rating);

    expect(renderedRating).not.toEqual(null);
  });

  it(`Should render correct stars rating relative to rating`, () => {
    const rating = 2.3;
    const ratingTestOffer = {
      ...offers[0],
      rating,
    };

    render(<OfferPage
      offer = {ratingTestOffer}
    />);

    const starsRating = screen.queryByTestId(`property-stars`);

    expect(starsRating).toHaveStyle(`width: 46%`);
  });

  it(`Should render bedrooms number`, () => {
    const numberOfBedrooms = 34;
    const numberOfBedroomsTestOffer = {
      ...offers[0],
      numberOfBedrooms,
    };

    render(<OfferPage
      offer = {numberOfBedroomsTestOffer}
    />);

    const renderedNumberOfBedrooms = screen.queryByText(`${numberOfBedrooms} Bedrooms`);

    expect(renderedNumberOfBedrooms).not.toEqual(null);
  });

  it(`Should render max guest number`, () => {
    const capacity = 14;
    const capacityTestOffer = {
      ...offers[0],
      capacity,
    };

    render(<OfferPage
      offer = {capacityTestOffer}
    />);

    const renderedCapacity = screen.queryByText(`Max ${capacity} adults`);

    expect(renderedCapacity).not.toEqual(null);
  });

  it(`Should render rent cost in euro`, () => {
    const price = 14;
    const priceTestOffer = {
      ...offers[0],
      price,
    };

    render(<OfferPage
      offer = {priceTestOffer}
    />);

    const renderedPrice = screen.queryByText(`€${price}`);

    expect(renderedPrice).not.toEqual(null);
  });

  it(`Should render feature-list`, () => {
    const features = [`Wifi`, `Heating`, `Cable TV`, `Coffee machine`, `Kitchen`, `Towels`];
    const featuresTestOffer = {
      ...offers[0],
      features,
    };

    render(<OfferPage
      offer={featuresTestOffer}
    />);

    const renderedFeaturesList = screen.getByTestId(`features-list`);
    const renderedFeatures = Array
      .from(renderedFeaturesList.childNodes)
      .map((feature) => feature.textContent);

    expect(renderedFeatures).toEqual(features);
  });

  describe(`host info`, () => {
    it(`should render host avatar`, () => {
      const avatar = `img/avatar-angelina.jpg`;
      const host = {
        ...offers[0].host,
        avatar
      };
      const hostAvatarTestOffer = {
        ...offers[0],
        host,
      };

      render(<OfferPage
        offer={hostAvatarTestOffer}
      />);

      const renderedHostAvatarUrl = screen.getByRole(`img`, {name: /host avatar/i}).getAttribute(`src`);

      expect(renderedHostAvatarUrl).toEqual(avatar);
    });

    it(`Should render host name`, () => {
      const name = `test offer host name`;
      const host = {
        ...offers[0].host,
        name
      };
      const hostNameTestOffer = {
        ...offers[0],
        host,
      };

      render(<OfferPage
        offer={hostNameTestOffer}
      />);

      const renderedName = screen.getByText(name);

      expect(renderedName.textContent).toEqual(name);
    });

    it(`Should render super mark if host has a super property`, () => {
      const isSuper = true;
      const host = {
        ...offers[0].host,
        isSuper
      };
      const hostSuperMarkTestOffer = {
        ...offers[0],
        host,
      };

      render(<OfferPage
        offer={hostSuperMarkTestOffer}
      />);

      const renderedHostAvatarWrapper = screen.getByRole(`img`, {name: /host avatar/i}).parentNode;

      expect(renderedHostAvatarWrapper.classList.contains(`property__avatar-wrapper--pro`)).toBe(true);
    });

    it(`Should not render super mark if host hasn't super property`, () => {
      const isSuper = false;
      const host = {
        ...offers[0].host,
        isSuper
      };
      const hostSuperMarkTestOffer = {
        ...offers[0],
        host,
      };

      render(<OfferPage
        offer={hostSuperMarkTestOffer}
      />);

      const renderedHostAvatarWrapper = screen.getByRole(`img`, {name: /host avatar/i}).parentNode;

      expect(renderedHostAvatarWrapper.classList.contains(`property__avatar-wrapper--pro`)).toBe(false);
    });
  });

  describe(`favorite-mark`, () => {
    it(`Should be rendered as a button if user user is authorized `);

    it(`Should be rendered as a link to login-page if user is not authorized`);

    describe(`favorite-button`, () => {
      it(`Should be filled by main color if offer is favorite`);

      it(`Should not be filled by color if offer is not favorite`);

      it(`Should set offer as favorite on click if offer is not favorite`);

      it(`Should set offer as not favorite on click if offer is favorite`);
    });
  });

  it(`Should render reviews count`);

  it(`Should render offer reviews`);

  it(`Should render review-form if user is authorized`);

  it(`Should not render review-form if user is not authorized`);

  describe(`review-form`, () => {
    it(`Should render five radio inputs with values from 1 to 5`);

    it(`Should render textarea with correct placeholder`);

    it(`Should render submit button`);

    describe(`submit button`, () => {
      it(`Should be disabled by default`);

      it(`Should be disabled if none of radio inputs is checked`);

      it(`Should be disabled if textarea value length less than 50 characters `);

      it(`Should be disabled if textarea value length more than 300 characters `);

      it(`Should be active if textarea length is > 50 and < 300 and one of radio inputs is checked`);
    });

    it(`Should be disabled after submit and before response come`);

    it(`Should be cleared after success response`);

    it(`Should show alert after error response`);
  });

  it(`Should render map with near offers`);

  it(`Should render near offers cards under the map`);
});

const offers = [
  {
    id: 4232,
    city: `Paris`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: false,
    type: `room`,
    rating: 3.8,
    numberOfBedrooms: 2,
    capacity: 4,
    price: 125,
    goods: [`Wifi`, `Heating`, `Cable TV`, `Coffee machine`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: true,
    },
    reviews: [11, 12]
  },
  {
    id: 4233,
    city: `Paris`,
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: true,
    type: `house`,
    rating: 4,
    numberOfBedrooms: 4,
    capacity: 5,
    price: 200,
    goods: [`Wifi`, `Heating`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    reviews: [11, 12, 13]
  },
  {
    id: 4234,
    city: `Cologne`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: false,
    isFavorite: true,
    type: `hotel`,
    rating: 2,
    numberOfBedrooms: 1,
    capacity: 1,
    price: 110,
    goods: [`Wifi`, `Heating`, `Cable TV`, `Coffee machine`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    },
    reviews: [11, 12, 13, 14]
  },
  {
    id: 4235,
    city: `Cologne`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: true,
    type: `room`,
    rating: 4.5,
    numberOfBedrooms: 3,
    capacity: 3,
    price: 325,
    goods: [`Wifi`, `Heating`, `Towels`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: false,
    },
    reviews: [12, 13]
  },
];
