import * as React from 'react';
import {FunctionComponent, useState} from 'react';

interface Props {
  sortTypes: string[];
  activeSortType: string;
  onClick: (sortType: string) => void;
}

const ACTIVE_CLASS_NAME = `places__option--active`;
const SORT_TEST_ID = `sorting-form`;

const Sort: FunctionComponent<Props> = ({sortTypes, activeSortType, onClick}: Props) => {
  const [isSortingListShown, setSortingListShown] = useState(false);

  const toggleSortingList = () => {
    setSortingListShown(!isSortingListShown);
  };

  const handleSortingItemClick = (evt: React.MouseEvent, sortType: string) => {
    evt.preventDefault();

    if (activeSortType !== sortType) {
      onClick(sortType);
    }
  };

  return (
    <form data-testid={SORT_TEST_ID} onClick={toggleSortingList} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {
        isSortingListShown
        &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            sortTypes.map((sortType) => (
              <li
                onClick={(evt) => handleSortingItemClick(evt, sortType)}
                key={sortType}
                className={`places__option ${sortType === activeSortType ? ACTIVE_CLASS_NAME : ``}`} tabIndex={0}>{sortType}
              </li>
            ))
          }
        </ul>
      }
    </form>
  );
};

export {ACTIVE_CLASS_NAME, SORT_TEST_ID};
export default Sort;
