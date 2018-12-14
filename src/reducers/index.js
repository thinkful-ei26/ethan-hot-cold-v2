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
    let newFeedback;
    let difference = Math.abs(this.state.truth - guess);
        if (state.truth === guess){
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
    Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      count: (state.count + 1).length,
      feedback: newFeedback
    })
  }
  else if(action.type === actions.NEW_GAME){
    Object.assign({}, state, initialState)
  }
  else if(action.type === actions.OPEN_WHAT || action.type === actions.CLOSE_WHAT){
    Object.assign({}, state, {
      rules: !state.rules
    })
  }
}