import React from 'react';
import { connect } from 'react-redux';
import { addFlasMessage } from '../actions/flashMessages';

export default function(ComposedComponent){
    class Authenticate extends React.Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlasMessage({
                    type: 'error',
                    text: 'You need to login to access this page'
                });
                this.context.router.push('/login');
            }
        }
        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired
    }; 

    Authenticate.contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    function mapStateToProps(state){
        return {
            isAuthenticated: React.PropTypes.bool.isRequired,
            addFlasMessage: React.PropTypes.func.isRequired
        };
    }

    return connect(mapStateToProps,{ addFlasMessage })(Authenticate);
}


