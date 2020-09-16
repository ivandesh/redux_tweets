import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleAddTweet} from '../actions/tweets';
import {useHistory} from 'react-router-dom';

export default function AddTweet(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const authedUser = useSelector(state => state.authedUser);
  const [text, setText] = React.useState('');

  const handleSubmit = () => {
    const replyingTo = props.id ? props.id : null
    setText('')
    dispatch(handleAddTweet({
      text,
      author: authedUser,
      replyingTo
    }))
    if(!props.id) {
      history.push('/')
    }
  }
  const isDisabled = !text;

  return (
    <div className='add-tweet'>
      <textarea 
        name="tweet" 
        placeholder="What's happening"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit} disabled={isDisabled}>Submit</button>
    </div>
  )
}
