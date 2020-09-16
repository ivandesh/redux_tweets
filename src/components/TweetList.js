import React from 'react'
import Tweet from './Tweet'
import dayjs from 'dayjs';

export default function TweetList({users, tweets, allTweets}) {

  const sortedTweets = Object.keys(tweets).map(id => {
    return tweets[id]
  }).sort((a, b) => b.timestamp - a.timestamp)

  return (
    <ul className='tweet-list'>
      {
        sortedTweets.map(tweet => {
          // Get author
          const author = users[tweet.author]

          // Get some fields
          const formattedDate = dayjs(tweet.timestamp).format('DD/MM/YYYY HH:mm')
          const replyingToAuthor = tweet.replyingTo ? allTweets[tweet.replyingTo].author : null

          // Props object
          const tweetData = {
            ...author,
            ...tweet,
            replyingToAuthor,
            likesCount: tweet.likes.length,
            repliesCount: tweet.replies.length,
            date: formattedDate,
          }
          return (
            <Tweet
              key={tweet.id}
              {...tweetData}
            />
          )
        })
      }
    </ul>
  )
}
