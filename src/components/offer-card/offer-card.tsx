import * as React from 'react';
import {FunctionComponent} from 'react';
import {OFFER_MAX_RATING, ROUTES} from '../../const/const';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {capitalizeFirstLetter, convertNumberToPercent} from '../../util/util';

interface Props {
  offer: Offer;
}

const OfferCard: FunctionComponent<Props> = ({offer}: Props) => {
  const {title, photos, isPremium, price, type, rating, id} = offer;
  const capitalizedType = capitalizeFirstLetter(type);
  const ratingInPercent = convertNumberToPercent(rating, OFFER_MAX_RATING);

  return (
    <article className="cities__place-card place-card">
      {
        isPremium &&
       <div className="place-card__mark">
         <span>Premium</span>
       </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={photos[0]} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span data-testid="card-stars" style={{width: `${ratingInPercent}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${ROUTES.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizedType}</p>
      </div>
    </article>
  );
};

export default OfferCard;
