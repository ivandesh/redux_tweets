import {SET_AUTHED_USER} from '../actions/authedUser';

export default function auhedUser(state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER:
      return action.authedUser
    default:
      return state
  }
}