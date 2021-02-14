import {getAuthorizationStatus} from "../../store/user/selectors";
import {connect} from "react-redux";
import App from "./app";

const mapStateToProps = (state) => ({
  isUserAuthorized: getAuthorizationStatus(state)
});

export default connect(
    mapStateToProps
)(App);
