import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Emoji from 'react-native-emoji';

const TouchableEmoji = (props) => (
  <TouchableOpacity>
    <Text style={{fontSize: 50, textAlign: 'center'}}><Emoji name={props.name}/></Text>
  </TouchableOpacity>
);

export default TouchableEmoji;
