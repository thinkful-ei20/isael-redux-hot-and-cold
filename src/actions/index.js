export const RESTART_GAME = 'RESTART_GAME';
export const MAKE_GUESS = 'MAKE_GUESS';
export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';

export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});

export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const generateAuralUpdate = message => ({
    type: GENERATE_AURAL_UPDATE,
    message
});