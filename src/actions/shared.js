import {showLoading, hideLoading} from 'react-redux-loading';
import {fetchUsers} from './users';
import {fetchTweets} from './tweets';
import {setAuthedUser} from './authedUser';
import {getInitialData} from '../utils/api';

const AUTHED_USER = 'tylermcginnis';

export function fetchInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, tweets}) => {
        dispatch(hideLoading())
        dispatch(fetchUsers(users))
        dispatch(fetchTweets(tweets))
        dispatch(setAuthedUser(AUTHED_USER))
      })
  }
}