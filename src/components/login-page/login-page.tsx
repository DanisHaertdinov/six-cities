import * as React from 'react';
import {useState, useRef, FunctionComponent} from 'react';
import {User} from '../../types/user';
import {checkEmailValidity} from '../../util/util';

interface Props {
  onSubmit(_user: User): void;
}

const LoginPage: FunctionComponent<Props> = ({onSubmit}: Props) => {
  const [isEmailValid, setEmailValidity] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValidity] = useState<boolean>(false);

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleEmailInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const isValid: boolean = checkEmailValidity(evt.target.value);

    setEmailValidity(isValid);
  };

  const handlePasswordInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    if (evt.target.value !== ``) {
      setPasswordValidity(true);
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const email: string = emailInput.current.value;
    const password: string = passwordInput.current.value;

    onSubmit({email, password});
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailInput} onChange={handleEmailInputChange} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordInput} onChange={handlePasswordInputChange} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled = {!(isEmailValid && isPasswordValid)}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
