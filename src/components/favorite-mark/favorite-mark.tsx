import * as React from 'react';
import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../const/const';

interface Props {
  asLink: boolean;
  isActive: boolean;
  onClick: () => void;
}

const FavoriteMark: FunctionComponent<Props> = ({asLink, isActive, onClick}: Props) => {
  const favoriteIcon = (
    <React.Fragment>
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isActive ? `In` : `To`} bookmarks</span>
    </React.Fragment>
  );

  const className = `place-card__bookmark-button ${isActive ? `place-card__bookmark-button--active` : ``} button`;

  return (
    <React.Fragment>
      {asLink
        ?
        <Link to={ROUTES.LOGIN} className={className}>
          {favoriteIcon}
        </Link>
        :
        <button onClick={onClick} className={className} type="button">
          {favoriteIcon}
        </button>
      }
    </React.Fragment>
  );
};

export default FavoriteMark;
