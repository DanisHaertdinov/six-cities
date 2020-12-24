import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
/* eslint-disable  */
const MainPage = (props) => <div className="main-page">{props.children}</div>;
const Header = (props) => <div className="header">{props.children}</div>;
const CitiesMenu = (props) => <div className="cities">{props.children}</div>;
const OffersList = (props) => <div className="offers">{props.children}</div>;
const Map = (props) => <div className="map">{props.children}</div>;
const LoginPage = (props) => <div className="login-page">{props.children}</div>;
const LoginForm = (props) => <div className="login-page__form">{props.children}</div>;
const Location = (props) => <div className="login-page__location">{props.children}</div>;
const FavoritesPage = (props) => <div className="favorites-page">{props.children}</div>;
const Favorites = (props) => <div className="favorites">{props.children}</div>;
const FavoritesItem = (props) => <div className="favorites__item">{props.children}</div>;
const City = (props) => <div className="favorites__city">{props.children}</div>;
const Footer = (props) => <div className="footer">{props.children}</div>;
const OfferPage = (props) => <div className="offer-page">{props.children}</div>;
const OfferData = (props) => <div className="offer">{props.children}</div>;
/* eslint-enable  */
const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage>
            <Header/>
            <CitiesMenu/>
            <OffersList/>
            <Map/>
          </MainPage>
        </Route>
        <Route exact path="/login">
          <LoginPage>
            <Header/>
            <LoginForm/>
            <Location/>
          </LoginPage>
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage>
            <Header/>
            <Favorites>
              <FavoritesItem>
                <City></City>
                <OffersList/>
              </FavoritesItem>
            </Favorites>
            <Footer/>
          </FavoritesPage>
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage>
            <Header/>
            <OfferData/>
            <Map/>
            <OffersList/>
          </OfferPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
