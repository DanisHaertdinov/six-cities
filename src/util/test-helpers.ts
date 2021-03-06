import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

const renderWithRouter = (component, {route = `/`} = {}) => {
  window.history.pushState({}, `Test page`, route);

  return render(component, {wrapper: BrowserRouter});
};

export {renderWithRouter};
