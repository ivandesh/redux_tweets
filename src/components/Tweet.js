import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FaReply, FaHeart } from "react-icons/fa";
import {handleToggleLike} from '../actions/likes';
import {Link} from 'react-router-dom';


export default function Tweet({id, name, avatarURL, date, replies, repliesCount, likes, likesCount, text, replyingToAuthor}) {
  const authedUser = useSelector(state => state.authedUser)
  const dispatch = useDispatch();
  const isLiked = likes.includes(authedUser)

  const handleClick = (e) => {
    e.preventDefault();
    
    dispatch(handleToggleLike({
      id,
      hasLiked: !isLiked,
      authedUser
    }))
  }
  return (
    <Link 
      to={{
        pathname: `/tweets/${id}`,
      }}
      className='tweet'
    >
      <img src={avatarURL} alt={`${name} avatar`}/>
      <div>
        <div className="user-info">
          <h5>{name}</h5>
          <p className="muted">{date}</p>
          {replyingToAuthor &&
            <p className="muted">Replying to @{replyingToAuthor}</p>}
        </div>

        <p className="tweet-text">{text}</p>

        <div className="buttons">
          <div className="button">
          <FaReply className='reply' />{repliesCount}
          </div>
          <div className="button" onClick={handleClick}>
          <FaHeart className={`like ${isLiked ? 'liked' : ''}`} />{likesCount}
          </div>
        </div>
      </div>
    </Link>
  )
}
