import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ScorePage extends Component {
  calculateScore() {

  }

  render() {
    return (
      <View>
        <Text>{`Score: ${this.props.score} out of ${this.props.total}`}</Text>
      </View>
    )
  }
}

export default ScorePage;
