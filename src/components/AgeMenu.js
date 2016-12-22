import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Menu from './Menu';

class AgeMenu extends Component {
  onRowPress() {
    Actions.topicMenu();
  }

  render () {
    return (
      <Menu onRowPress={this.onRowPress} />
    )
  }
}

export default AgeMenu;
