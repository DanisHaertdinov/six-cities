import * as React from 'react';
import {FunctionComponent} from 'react';
import {ROUTES} from '../../const/const';
import {User} from '../../types/user';
import {Link} from 'react-router-dom';

interface Props {
  isAuthorized: boolean;
  user: User;
}

const Header: FunctionComponent<Props> = ({isAuthorized, user}: Props) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={ROUTES.MAIN} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isAuthorized ? ROUTES.FAVORITES : ROUTES.LOGIN} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">{isAuthorized ? user.email : `Sign in`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
