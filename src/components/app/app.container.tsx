import {connect} from 'react-redux';
import {RootState} from '../../store/reducer';
import {selectAuthorizationStatus} from '../../store/user/selectors';
import App from './app';

const mapStateToProps = (state: RootState) => ({
  isUserAuthorized: selectAuthorizationStatus(state)
});

export default connect(
    mapStateToProps
)(App);
