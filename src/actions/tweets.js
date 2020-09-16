import {showLoading, hideLoading} from 'react-redux-loading';
import {saveTweet} from '../utils/api'
export const FETCH_TWEETS = 'FETCH_TWEETS';
export const ADD_TWEET = 'SAVE_TWEET';

export const fetchTweets = (tweets) => ({type: FETCH_TWEETS, tweets})

const addTweet = (tweet) => ({type: ADD_TWEET, tweet})

export const handleAddTweet = (tweetData) => {
  return (dispatch) => {
    dispatch(showLoading())
    return saveTweet(tweetData)
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}