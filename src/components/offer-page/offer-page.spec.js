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

  });

  it(`Should render offer premium mark if offer is premium`, () => {

  });

  it(`Should not render offer premium mark if offer is not premium`, () => {

  });

  it(`Should render correct offer type`, () => {

  });

  it(`Should render offer rating`, () => {

  });

  it(`Should render correct stars rating relative to rating`, () => {

  });

  it(`Should render bedrooms number`, () => {

  });

  it(`Should render max guest number`, () => {

  });

  it(`Should render rent cost`, () => {

  });

  it(`Should always render rent cost in euro`, () => {

  });

  it(`Should render feature-list`, () => {

  });

  describe(`host info`, () => {
    it(`should render host avatar`, () => {

    });

    it(`Should render host name`, () => {

    });

    it(`Should render super mark if host has a super property`, () => {

    });

    it(`Should not render super mark if host hasn't super property`, () => {

    });
  });
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
