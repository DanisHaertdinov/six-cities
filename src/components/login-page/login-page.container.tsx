import {connect} from 'react-redux';
import {authorize} from '../../store/user/user-slice';
import LoginPage from './login-page';


const mapDispatchToProps = {onSubmit: authorize};

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);
