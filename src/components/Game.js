import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common/CardSection';
import TouchableEmoji from './TouchableEmoji';
import sagaOne from '../sagas/SagaOne';
import Emoji from 'react-native-emoji';

class Game extends Component {
  componentWillMount() {

  }

  // TODO fix the key below as it is bad practice
  render() {
    return (
      <View>
        <CardSection>
          <Text>{sagaOne[0].directions}</Text>
        </CardSection>
        {
          sagaOne[0].emojis.map((emojiName, i) => <TouchableEmoji key={i} name={emojiName} />)
        }
      </View>
    )
  }
}

export default Game;
