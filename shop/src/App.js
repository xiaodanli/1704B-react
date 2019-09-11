import React from 'react';
import Router from '@/router'
import store from '@/store/'
import {Provider} from 'react-redux'
import '@/assets/scss/common.scss'
import '@/assets/css/reset.css'

function App() {
  return <Provider store={store}>
        <Router></Router>
      </Provider>
}

export default App;
