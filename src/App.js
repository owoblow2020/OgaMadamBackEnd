import React, { Component } from 'react';
import MainRoute from './routes/MainRoute';
import { Provider } from 'react-redux';
import Store from './Store';


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MainRoute />
      </Provider>
    );
  }
}

export default App;
