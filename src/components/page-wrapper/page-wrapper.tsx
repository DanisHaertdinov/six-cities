import * as React from 'react';
import {FunctionComponent} from 'react';
import {ROUTES} from '../../const/const';

const DEFAULT_CLASS_NAMES = `page`;
const TEST_ID = `page-wrapper`;

interface Props {
  location: string;
  children: React.ReactNode;
}

const PageWrapperClassNames: {
  [key: string]: string;
} = {
  [ROUTES.MAIN]: `${DEFAULT_CLASS_NAMES} page page--gray page--main`,
  [ROUTES.LOGIN]: `${DEFAULT_CLASS_NAMES} page--gray page--login`,
  [`DEFAULT`]: DEFAULT_CLASS_NAMES
};

const PageWrapper: FunctionComponent<Props> = ({location, children}: Props) => {
  const className = PageWrapperClassNames[location] || PageWrapperClassNames[`DEFAULT`];

  return (
    <div
      className={className}
      data-testid={TEST_ID}
    >
      {children}
    </div>
  );
};

export {TEST_ID};
export default PageWrapper;
