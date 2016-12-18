import React, { Component } from 'react';
import { Provider } from  'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Text } from 'react-native';

class App extends Component {

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Text>Yo</Text>
    )
  }
}

export default App;
