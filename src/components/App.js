import * as React from 'react'
import {useDispatch} from 'react-redux';
import {fetchInitialData} from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';
import AddTweet from './AddTweet';
import TweetView from './TweetView';
import Nav from './Nav';

export default function App () {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className='container'>
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='/add' component={AddTweet} />
        <Route path='/tweets/:id' component={TweetView} />
      </div>
    </Router>
  )
}