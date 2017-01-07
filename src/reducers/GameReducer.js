import {
  ADD_TO_ANSWER_ARRAY,
  INCREMENT_QUESTION_ITERATOR,
  CLEAR_ANSWER_ARRAY
} from '../actions/GameActions';

const INITIAL_STATE = {
  answerArray: [],
  questionIterator: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_ANSWER_ARRAY:
      return { ...state, answerArray: [ ...state.answerArray, action.payload ] };
    case INCREMENT_QUESTION_ITERATOR:
      console.log("increment")
      return { ...state, questionIterator: state.questionIterator + 1 };
    case CLEAR_ANSWER_ARRAY:
      return { ...state, answerArray: [] };
    default:
      return state;
  }
}
