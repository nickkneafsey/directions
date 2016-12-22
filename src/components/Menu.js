import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native'
import { CardSection } from './common';

const Menu = ({ onRowPress }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onRowPress.bind(this)}>
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

export default Menu;
