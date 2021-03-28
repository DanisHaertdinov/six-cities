import * as React from 'react';
import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {OFFER_MAX_RATING, ROUTES} from '../../const/const';
import {Offer} from '../../types/offer';
import {capitalizeFirstLetter, convertNumberToPercent} from '../../util/util';
import FavoriteMark from '../favorite-mark/favorite-mark';

interface Props {
  offer: Offer;
  onImageClick?: (id: number) => void;
  isAuthorized: boolean;
  onFavoriteClick: (id: number) => void;
}

const OfferCard: FunctionComponent<Props> = ({offer, onImageClick, isAuthorized, onFavoriteClick}: Props) => {
  const {title, photos, isPremium, price, type, rating, id, isFavorite} = offer;
  const capitalizedType = capitalizeFirstLetter(type);
  const ratingInPercent = convertNumberToPercent(rating, OFFER_MAX_RATING);

  const handleImageClick = (evt: React.MouseEvent<HTMLElement>): void => {
    evt.preventDefault();
    if (onImageClick) {
      onImageClick(id);
    }
  };

  const handleFavoriteClick = (): void => {
    onFavoriteClick(id);
  };

  return (
    <article className="cities__place-card place-card">
      {
        isPremium &&
       <div className="place-card__mark">
         <span>Premium</span>
       </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={handleImageClick}>
          <img className="place-card__image" src={photos[0]} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteMark
            asLink={!isAuthorized}
            isActive={isFavorite}
            onClick={handleFavoriteClick}
          />
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
