import React from 'react';
import {useSelector} from 'react-redux';
import Tweet from './Tweet';
import {useParams} from 'react-router-dom'
import dayjs from 'dayjs';
import AddTweet from './AddTweet';
import TweetList from './TweetList';

export default function TweetView() {
  const tweets = useSelector(state => state.tweets)
  const users = useSelector(state => state.users)
  const {id} = useParams()

  const tweet = tweets[id]
  if(!tweet) return null
  
  const author = users[tweet.author]

  const replies = tweet.replies.map(id => tweets[id])

  const formattedDate = dayjs(tweet.timestamp).format('DD/MM/YYYY HH:mm')
  const replyingToAuthor = tweet.replyingTo ? tweets[tweet.replyingTo].author : null

  const tweetData = {
    ...author,
    ...tweet,
    replyingToAuthor,
    likesCount: tweet.likes.length,
    repliesCount: tweet.replies.length,
    date: formattedDate,
  }
  
  if(!tweet || !author) return <p>Loading...</p>

  return (
    <div>
      <Tweet {...tweetData} />
      <AddTweet id={id} />
      <TweetList users={users} tweets={replies} allTweets={tweets}/>
    </div>
  )
}
