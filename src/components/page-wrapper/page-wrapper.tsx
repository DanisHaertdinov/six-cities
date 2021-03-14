import * as React from 'react';
import {FunctionComponent} from 'react';
import {ROUTES} from '../../const/const';

interface Props {
  location: string;
  children: React.ReactNode;
}

const DEFAULT_CLASS_NAMES = `page`;

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
      data-testid={`page-wrapper`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
