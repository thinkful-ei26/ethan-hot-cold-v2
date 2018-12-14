import * as actions from '../actions';

const initialState = {
    rules: false,
    feedback: "Make your guess!",
    guesses: [],
    count: 0,
    truth: Math.ceil(Math.random() * 100)    
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.ENTER_GUESS) {
    const newGuessArray = [...state.guesses, action.guess];
    let newFeedback;
    let difference = Math.abs(state.truth - action.guess);
    if (state.truth === action.guess){
        newFeedback = 'winner winner chicken dinner';
    } else if (difference < 5){
        newFeedback = 'SCORCHING';
    } else if (difference < 10){
        newFeedback = 'bien caliente';
    } else if (difference < 15){
        newFeedback = 'hottish';
    } else if (difference < 25){
        newFeedback = 'kinda warm i guess?';
    } else if (difference < 35){
        newFeedback = 'cold';
    } else {
        newFeedback = 'Just embarassing';
    }
    return Object.assign({}, state, {
      guesses: newGuessArray,
      count: newGuessArray.length,
      feedback: newFeedback
    });
  }
  else if(action.type === actions.NEW_GAME){
    return Object.assign({}, initialState, {truth: Math.ceil(Math.random() * 100)}
    );
  }
  else if(action.type === actions.OPEN_WHAT || action.type === actions.CLOSE_WHAT){
    return Object.assign({}, state, {
      rules: !state.rules
    });
  }
  // else {
  //   return Object.assign({}, state, initialState);
  // }
  
  return state;
}