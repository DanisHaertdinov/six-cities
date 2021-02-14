import {connect} from "react-redux";
import LoginPage from "./login-page";
import {authorize} from "../../store/user/user-slice";


const mapDispatchToProps = {onSubmit: authorize};

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);
