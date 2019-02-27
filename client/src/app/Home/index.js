import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from './ducks/actions';
import { userData } from '../ducks/user/actions';
import { setAuthToken } from '../../config/setAuthToken';


// if (localStorage.jwt) {
//     const { logout, history } = this.props;
//     const currentTime = Date.now() / 1000;
//     // We do the same thing in our authentication action call.
//     setAuthToken(localStorage.jwt);

//     // This is setting an expiration date on someone
//     // being logged in. Notice that the user still
//     // has to be logged for this to happen. 
//     // if (decoded.exp < currentTime) {
//     //     logout(history);
//     // }
// }

class HomeContainer extends Component {

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

    render() {
      const { user, logout, history } = this.props;
        return(
            <div>
              {console.log(user)}
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
