import React from 'react'
import {useSelector} from 'react-redux'
import TweetList from './TweetList'

export default function Home() {
  const users = useSelector(state => state.users)
  const tweets = useSelector(state => state.tweets)

  return (
    <div>
      <TweetList tweets={tweets} users={users} allTweets={tweets} />
    </div>
  )
}
