import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';


class SignupPage extends Component {
	render() {
		const {userSignupRequest, isUserExists, addFlashMessage} = this.props;
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm
						userSignupRequest={userSignupRequest}
						addFlashMessage={addFlashMessage}
						isUserExists={isUserExists} />
				</div>
			</div>
		);
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired,
	isUserExists: React.PropTypes.func.isRequired
};

export default connect(null, {
	userSignupRequest,
	addFlashMessage,
	isUserExists
})(SignupPage);