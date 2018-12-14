export const ENTER_GUESS;
export const enterGuess = guess => ({
  type: ENTER_GUESS,
  guess
});

export const NEW_GAME;
export const newGame = () => ({
  type: NEW_GAME
});

export const OPEN_WHAT;
export const openWhat = () => ({
  type: OPEN_WHAT
});

export const CLOSE_WHAT;
export const closeWhat = () => ({
  type: CLOSE_WHAT
});