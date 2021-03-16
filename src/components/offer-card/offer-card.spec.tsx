import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';
import * as React from 'react';
import OfferCard from './offer-card';
import {offers} from '../../test-data';
import {Offer} from '../../types/offer';
import {renderWithRouter} from '../../util/test-helpers';

describe(`OfferCard`, () => {
  it(`Should render offer title`, () => {
    const testOffer: Offer = {
      ...offers[0],
      title: `test-offer`,
    };

    renderWithRouter(
        <OfferCard
          offer={testOffer}
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
    />);

    const starsRating = screen.queryByTestId(`card-stars`);

    expect(starsRating).toHaveStyle(`width: 46%`);
  });
});
