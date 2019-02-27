import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from './ducks/actions';
import { userData } from '../ducks/user/actions';
import { setAuthToken } from '../../config/setAuthToken';

class HomeContainer extends Component {
  
  componentDidMount() {
    const { logout, history, getUser, user } = this.props;
    if (localStorage.jwt) {
        const currentTime = Date.now() / 1000;
        // We do the same thing in our authentication action call.
        setAuthToken(localStorage.jwt);
        getUser();

        // This is setting an expiration date on someone
        // being logged in. Notice that the user still
        // has to be logged for this to happen. 
        if (user.exp < currentTime) {
            logout(history);
        }
    } else history.push('/login');

  }

  render() {
    const { user, logout, history } = this.props;
      return(
          <div>
            {user.isAuth && <button onClick={() => logout(history)}>Logout</button>}
          </div>
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
    getUser: () => dispatch(userData()),
    logout: history => dispatch(logoutUser(history))
  }
}

export default connect(mapStateToProps, mapDistpachToProps)(HomeContainer);
