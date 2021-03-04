import {selectAuthorizationStatus} from '../../store/user/selectors';
import {connect} from 'react-redux';
import App from './app';

interface RootState {
  isAuthorized: boolean;
  info: {
    email: string;
  };
}

const mapStateToProps = (state: RootState) => ({
  isUserAuthorized: selectAuthorizationStatus(state)
});

export default connect(
    mapStateToProps
)(App);
