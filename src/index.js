import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import LoadingBar from 'react-redux-loading'

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
    </React.Fragment>
  )
}

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ColorfulBorder />
      <LoadingBar />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)