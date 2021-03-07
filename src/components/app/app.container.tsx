import {selectAuthorizationStatus} from '../../store/user/selectors';
import {connect} from 'react-redux';
import App from './app';
import {RootState} from "../../store/reducer";

const mapStateToProps = (state: RootState) => ({
  isUserAuthorized: selectAuthorizationStatus(state)
});

export default connect(
    mapStateToProps
)(App);
