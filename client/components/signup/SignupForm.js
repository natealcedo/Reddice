import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';


export default class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		this.setState({
			errors: {},
			isLoading: true
		});
		e.preventDefault();
		this.props.userSignupRequest(this.state).then(
			() => { },
			({data}) => this.setState({
				errors: data,
				isLoading: false
			})
		);
	}

	render() {
		const {errors} = this.state;
		const options = map(timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
		);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>
				<div className={classnames('form-group', { 'has-error': errors.username })}>
					<label className="control-label">Username</label>
					<input
						type="text"
						name='username'
						className='form-control'
						value={this.state.username}
						onChange={this.onChange}
					/>
					{errors.username && <span className='help-block'>{errors.username}</span>}
				</div>
				<div className={classnames('form-group', { 'has-error': errors.email })}>
					<label className="control-label">Email</label>
					<input
						type="text"
						name='email'
						className='form-control'
						value={this.state.email}
						onChange={this.onChange}
					/>
					{errors.email && <span className='help-block'>{errors.email}</span>}
				</div>
				<div className={classnames('form-group', { 'has-error': errors.password })}>
					<label className="control-label">Password</label>
					<input
						type="text"
						name='password'
						className='form-control'
						value={this.state.password}
						onChange={this.onChange}
					/>
					{errors.password && <span className='help-block'>{errors.password}</span>}
				</div>
				<div className={classnames('form-group', { 'has-error': errors.passwordConfirmation })}>
					<label className="control-label">Password Confirmation</label>
					<input
						type="text"
						name='passwordConfirmation'
						className='form-control'
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
					/>
					{errors.password && <span className='help-block'>{errors.passwordConfirmation}</span>}
				</div>
				<div className={classnames('form-group', { 'has-error': errors.timezone })}>
					<label className="control-label">Timezone</label>
					<select
						className='form-control'
						name='timezone'
						onChange={this.onChange}
						value={this.state.timezone}
					>
						<option value="" disabled>Choose Your Timezone</option>
						{options}
					</select>
					{errors.timezone && <span className='help-block'>{errors.timezone}</span>}
				</div>
				<div className={classnames('form-group', { 'has-error': errors.username })}>
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up!</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
};