import {showLoading, hideLoading} from 'react-redux-loading';
import {saveLikeToggle} from '../utils/api'
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

const toggleLike = (id, hasLiked, authedUser) => ({type: TOGGLE_LIKE, id, hasLiked, authedUser})

export const handleToggleLike = ({id, hasLiked, authedUser}) => {
  return (dispatch) => {
    dispatch(toggleLike(id, hasLiked, authedUser))
    return saveLikeToggle({id, hasLiked, authedUser})
      .catch(() => dispatch(toggleLike(id, hasLiked, authedUser)))
  }
}