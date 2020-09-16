import {FETCH_USERS} from '../actions/users';
import {ADD_TWEET} from '../actions/tweets';

export default function users(state = {}, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {
        ...state, 
        ...action.users
      }
    case ADD_TWEET:
      const author = action.tweet.author
      return {
        ...state,
        [author]: {
          ...state[author],
          tweets: state[author].tweets.concat([action.tweet.id])
        }
      }
    default:
      return state
  }
}