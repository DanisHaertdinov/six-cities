import {selectAuthorizationStatus} from '../../store/user/selectors';
import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state) => ({
  isUserAuthorized: selectAuthorizationStatus(state)
});

export default connect(
    mapStateToProps
)(App);
