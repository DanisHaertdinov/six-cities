import * as React from 'react';
import {FunctionComponent} from 'react';
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../const/const';
import LoginPage from '../login-page/login-page.container';
import OfferPage from '../offer-page/offer-page';

/* eslint-disable  */
const MainPage = (props) => <div className="main-page"><h1>main page</h1>{props.children}</div>;
const Header = (props) => <div className="header">{props.children}</div>;
const CitiesMenu = (props) => <div className="cities">{props.children}</div>;
const OffersList = (props) => <div className="offers">{props.children}</div>;
const Map = (props) => <div className="map">{props.children}</div>;
const LoginForm = (props) => <div className="login-page__form">{props.children}</div>;
const Location = (props) => <div className="login-page__location">{props.children}</div>;
const FavoritesPage = (props) => <div className="favorites-page">{props.children}</div>;
const Favorites = (props) => <div className="favorites">{props.children}</div>;
const FavoritesItem = (props) => <div className="favorites__item">{props.children}</div>;
const City = (props) => <div className="favorites__city">{props.children}</div>;
const Footer = (props) => <div className="footer">{props.children}</div>;
const OfferData = (props) => <div className="offer">{props.children}</div>;
/* eslint-enable  */

interface AppProps {
  isUserAuthorized: boolean;
}

const App: FunctionComponent<AppProps> = ({isUserAuthorized}: AppProps) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <MainPage>
            <Header/>
            <CitiesMenu/>
            <OffersList/>
            <Map/>
          </MainPage>
        </Route>
        <Route exact path={ROUTES.LOGIN}>
          {
            isUserAuthorized
              ? <Redirect
                to={ROUTES.MAIN}
              />
              : <LoginPage>
                <Header/>
                <LoginForm/>
                <Location/>
              </LoginPage>
          }
        </Route>
        <Route exact path={ROUTES.FAVORITES}>
          <FavoritesPage>
            <Header/>
            <Favorites>
              <FavoritesItem>
                <City/>
                <OffersList/>
              </FavoritesItem>
            </Favorites>
            <Footer/>
          </FavoritesPage>
        </Route>
        <Route path={ROUTES.OFFER}>
          <OfferPage/>
          {/*  /!*<Header/>*!/*/}
          {/*  /!*<OfferData/>*!/*/}
          {/*  /!*<Map/>*!/*/}
          {/*  /!*<OffersList/>*!/*/}
          {/* </OfferPage>*/}
          {/* // TODO: remove commented code when offer page will be render by history api*/}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
