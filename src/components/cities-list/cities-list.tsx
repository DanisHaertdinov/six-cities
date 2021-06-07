import * as React from 'react';
import {FunctionComponent} from 'react';

interface Props {
  citiesNames: string[];
  activeCityName: string;
  onClick: (city: string) => void;
}

const ACTIVE_CLASS_NAME = `tabs__item--active`;

const CitiesList: FunctionComponent<Props> = ({citiesNames, activeCityName, onClick}: Props) => {
  const handleCityClick = (cityName: string, evt: React.MouseEvent): void => {
    evt.preventDefault();

    if (cityName !== activeCityName) {
      onClick(cityName);
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((cityName) =>
        (
          <li key={cityName} className="locations__item">
            <a className={`locations__item-link tabs__item ${(cityName === activeCityName) ? ACTIVE_CLASS_NAME : ``}`} onClick={(evt) => handleCityClick(cityName, evt)} href="#">
              <span>{cityName}</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export {ACTIVE_CLASS_NAME};
export default CitiesList;
