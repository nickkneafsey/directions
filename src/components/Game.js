import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Emoji from 'react-native-emoji';
import { CardSection } from './common/CardSection';
import TouchableEmoji from './TouchableEmoji';
import sagaOne from '../sagas/SagaOne';
import {
  addToAnswerArray,
  incrementQuestionIterator,
  clearAnswerArray
} from '../actions/GameActions';

class Game extends Component {
  componentWillReceiveProps(nextProps) {
    this.checkForWinner(nextProps.answerArray, nextProps.i);
  }

  checkForWinner(answer, i) {
    console.log("Answer Array", answer)
    console.log("i", i);
    console.log("correct answer", sagaOne[i].correctAnswer)
    if (i > sagaOne.length) {
      // Show score page
    }

    if (_.isEqual(sagaOne[i].correctAnswer, answer)) {
      console.log("Win")
      this.props.incrementQuestionIterator();
      this.props.clearAnswerArray();
      this.render();
    } else {
      console.log("Not a win")
    }
  }

  onEmojiPress(name) {
    this.props.addToAnswerArray(name);
  }

  // TODO fix the key below as it is bad practice
  render() {
    const { i } = this.props;
    return (
      <View>
        <CardSection>
          <Text>{sagaOne[i].directions}</Text>
        </CardSection>
        {
          sagaOne[i].emojis.map((emojiName, iterator) => {
            return (
              <TouchableEmoji
                key={iterator}
                name={emojiName}
                onEmojiPress={this.onEmojiPress.bind(this)}
                />
            )
          })
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answerArray: state.game.answerArray,
    i: state.game.questionIterator
  }
};

export default connect(mapStateToProps, {
  addToAnswerArray,
  incrementQuestionIterator,
  clearAnswerArray
})(Game);
