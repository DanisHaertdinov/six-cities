import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';
import * as React from 'react';
import OfferCard from './offer-card';
import {offers} from '../../test-data';
import {Offer} from '../../types/offer';
import {renderWithRouter} from '../../util/test-helpers';
import userEvent from '@testing-library/user-event';

const noop = () => {};

describe(`OfferCard`, () => {
  it(`Should render offer title`, () => {
    const testOffer: Offer = {
      ...offers[0],
      title: `test-offer`,
    };

    renderWithRouter(
        <OfferCard
          offer={testOffer}
          isAuthorized={true}
          onFavoriteClick={noop}
        />
    );

    expect(screen.getByText(`test-offer`)).toBeInTheDocument();
  });

  it(`Should render first photo of offer photos as image`, () => {
    const offerTestPhotos: string[] = [`test-photo.png`, `test-photo2.png`, `test-photo3.png`];
    const testOffer: Offer = {
      ...offers[0],
      photos: offerTestPhotos,
    };

    renderWithRouter(
        <OfferCard
          offer={testOffer}
          isAuthorized={true}
          onFavoriteClick={noop}
        />
    );

    const offerPhoto = screen.getByRole(`img`, {name: /place image/i});

    expect(offerPhoto.getAttribute(`src`)).toBe(offerTestPhotos[0]);
  });

  it(`Should render premium mark if offer is premium`, () =>{
    const isPremium = true;
    const premiumTestOffer: Offer = {
      ...offers[0],
      isPremium,
    };

    renderWithRouter(<OfferCard
      offer = {premiumTestOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const premiumMark: HTMLElement = screen.getByText(`Premium`);

    expect(premiumMark).toBeInTheDocument();
  });

  it(`Should not render premium mark if offer is not premium`, () =>{
    const isPremium = false;
    const premiumTestOffer: Offer = {
      ...offers[0],
      isPremium,
    };

    renderWithRouter(<OfferCard
      offer = {premiumTestOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const premiumMark: HTMLElement = screen.queryByText(`Premium`);

    expect(premiumMark).toBe(null);
  });

  it(`Should render rent cost in euro`, () => {
    const price = 14;
    const priceTestOffer: Offer = {
      ...offers[0],
      price,
    };

    renderWithRouter(<OfferCard
      offer = {priceTestOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const renderedPrice: HTMLElement = screen.getByText(`€${price}`);

    expect(renderedPrice).toBeInTheDocument();
  });

  it(`Should render capitalized offer type`, () => {
    const type = `house`;
    const typeTestOffer: Offer = {
      ...offers[0],
      type,
    };

    renderWithRouter(<OfferCard
      offer = {typeTestOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const renderedType: HTMLElement = screen.queryByText(`House`);

    expect(renderedType).toBeInTheDocument();
  });


  it(`Should render correct stars rating relative to rating`, () => {
    const rating = 2.3;
    const ratingTestOffer: Offer = {
      ...offers[0],
      rating,
    };

    renderWithRouter(<OfferCard
      offer = {ratingTestOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const starsRating = screen.queryByTestId(`card-stars`);

    expect(starsRating).toHaveStyle(`width: 46%`);
  });

  it(`Should render favorite mark as button if user is authorized`, () => {
    const isFavorite = true;
    const testOffer: Offer = {
      ...offers[0],
      isFavorite,
    };

    renderWithRouter(<OfferCard
      offer = {testOffer}
      isAuthorized={true}
      onFavoriteClick={noop}
    />);

    const favoriteButton = screen.getByRole(`button`, {name: /In bookmarks/i});
    const favoriteLink = screen.queryByRole(`link`, {name: /In bookmarks/i});

    expect(favoriteButton).toBeInTheDocument();
    expect(favoriteLink).toBe(null);
  });

  it(`Should handle onFavoriteClick if user is authorized`, () => {
    const onFavoriteClick = jest.fn();
    const isFavorite = true;
    const testOffer: Offer = {
      ...offers[0],
      isFavorite,
    };

    renderWithRouter(<OfferCard
      offer = {testOffer}
      isAuthorized={true}
      onFavoriteClick={onFavoriteClick}
    />);

    userEvent.click(screen.getByRole(`button`, {name: /In bookmarks/i}));

    expect(onFavoriteClick).toHaveBeenCalledWith(testOffer.id);
  });

  it(`Should render favorite mark as link if user is not authorized`, () => {
    const isFavorite = true;
    const testOffer: Offer = {
      ...offers[0],
      isFavorite,
    };

    renderWithRouter(<OfferCard
      offer = {testOffer}
      isAuthorized={false}
      onFavoriteClick={noop}
    />);

    const favoriteButton = screen.queryByRole(`button`, {name: /In bookmarks/i});
    const favoriteLink = screen.getByRole(`link`, {name: /In bookmarks/i});

    expect(favoriteLink).toBeInTheDocument();
    expect(favoriteButton).toBe(null);
  });
});
