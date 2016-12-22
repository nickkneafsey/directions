import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Menu from './Menu';

class TopicMenu extends Component {
  onRowPress() {
    Actions.game();
  }

  render () {
    return (
      <Menu onRowPress={this.onRowPress} />
    )
  }
}

export default TopicMenu;
