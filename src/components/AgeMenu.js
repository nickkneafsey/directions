import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class AgeMenu extends Component {
  onRowPress() {
    Actions.topicMenu();
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View>
            <CardSection>
              <Text>
                All Ages
              </Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default AgeMenu;
