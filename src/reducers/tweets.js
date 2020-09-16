import {FETCH_TWEETS, ADD_TWEET} from '../actions/tweets';
import {TOGGLE_LIKE} from '../actions/likes';

export default function tweets(state = {}, action) {
  switch(action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    case ADD_TWEET:
      if(action.tweet.replyingTo) {
        return {
          ...state,
          [action.tweet.id]: action.tweet,
          [action.tweet.replyingTo]: {
            ...state[action.tweet.replyingTo],
            replies: state[action.tweet.replyingTo].replies.concat([action.tweet.id])
          }
        }
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked ? state[action.id].likes.concat([action.authedUser]) :
          state[action.id].likes.filter(user => user !== action.authedUser)
        }
      }
    default:
      return state;
  }
}