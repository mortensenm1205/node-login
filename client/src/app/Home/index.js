import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userData } from '../../User/actions';
import { setAuthToken } from '../../config/setAuthToken';

if (localStorage.jwt) {
    // We do the same thing in our authentication action call.
    setAuthToken(localStorage.jwt);

    // This is setting an expiration date on someone
    // being logged in. Notice that the user still
    // has to be logged for this to happen. 
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //     store.dispatch(logoutUser());
    //     window.location.href = '/login';
    // }
}

class HomeContainer extends Component {

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

    render() {
        return(
            <div>{console.log(this.props.user)}</div>
        )
    }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDistpachToProps = dispatch => {
  return {
    getUser: () => dispatch(userData())
  }
}

export default connect(mapStateToProps, mapDistpachToProps)(HomeContainer);
