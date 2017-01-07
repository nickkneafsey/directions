export const ADD_TO_ANSWER_ARRAY = 'ADD_TO_ANSWER_ARRAY';
export const addToAnswerArray = (newAnswer) => {
  return {
    type: ADD_TO_ANSWER_ARRAY,
    payload: newAnswer
  };
}

export const INCREMENT_QUESTION_ITERATOR = 'INCREMENT_QUESTION_ITERATOR';
export const incrementQuestionIterator = () => {
  return {
    type: INCREMENT_QUESTION_ITERATOR
  }
}

export const CLEAR_ANSWER_ARRAY = 'CLEAR_ANSWER_ARRAY';
export const clearAnswerArray = () => {
  return {
    type: CLEAR_ANSWER_ARRAY
  }
}
